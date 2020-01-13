import { Injectable } from '@angular/core';
import {
  ANTLRInputStream,
  CommonTokenStream,
  ParserRuleContext,
  ANTLRErrorListener,
  Recognizer,
  RecognitionException
} from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

import { ExpressionLexer } from './ExpressionLexer';
import {
  ExpressionParser,
  RootContext,
  ExpressionContext,
  LogicalExpressionContext,
  BitwiseExpressionContext,
  AddingExpressionContext,
  MultiplyingExpressionContext,
  ClauseContext,
  LiteralContext,
  DecimalContext,
  BinaryContext,
  OctalContext,
  HexadecimalContext
} from './ExpressionParser';
import { ExpressionVisitor } from './ExpressionVisitor';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  constructor() {}

  public calculate(expression: string): CalculationResult {
    const errorListener = new ErrorListener();

    const lexer = new ExpressionLexer(new ANTLRInputStream(expression));
    lexer.addErrorListener(errorListener);

    const parser = new ExpressionParser(new CommonTokenStream(lexer));
    parser.addErrorListener(errorListener);

    const root = parser.root();
    // Visitor.dump(root);
    const visitor = new Visitor();
    const value = visitor.visitRoot(root);

    return { value, stack: visitor.stack };
  }
}

export interface CalculationResult {
  value: number;
  stack: CalculationStack;
}

export interface CalculationStack {
  expression: string;
  result: number;
  parent: CalculationStack | null;
  children: CalculationStack[];
}

export class ExpressionError implements Error {

  public readonly name = 'ExpressionError';

  constructor(
    public readonly message: string,
    public readonly line: number,
    public readonly column: number
  ) {}

  public toString() {
    return this.message;
  }
}

class Visitor extends AbstractParseTreeVisitor<number>
  implements ExpressionVisitor<number> {

  stack: CalculationStack;
  private currentStack: CalculationStack;

  public static dump(ctx: any, level: number = 0) {
    console.dir(`${' '.repeat(level)}${ctx.text} [${ctx.constructor.name}]`);
    if (ctx.children)
      ctx.children.forEach(child => this.dump(child, level + 1));
  }

  visitRoot(ctx: RootContext) {
    return this.visitChild(ctx);
  }

  visitExpression(ctx: ExpressionContext) {
    return this.visitChild(ctx);
  }

  visitLogicalExpression(ctx: LogicalExpressionContext) {
    return this.visitOperationalExpression(ctx);
  }

  visitBitwiseExpression(ctx: BitwiseExpressionContext) {
    return this.visitOperationalExpression(ctx);
  }

  visitAddingExpression(ctx: AddingExpressionContext) {
    return this.visitOperationalExpression(ctx);
  }

  visitMultiplyingExpression(ctx: MultiplyingExpressionContext) {
    return this.visitOperationalExpression(ctx);
  }

  visitClause(ctx: ClauseContext) {
    switch (ctx.children.length) {
      case 1:
        return this.visitChild(ctx);
      case 2:
        return this.pushStack(ctx)(this.visitUnaryExpression(ctx));
      case 3:
        if (ctx.children[0].text === '(' && ctx.children[2].text === ')')
          return this.visit(ctx.children[1]);
      /* falls through */
      default:
        // throw new Error(`Unexpected expression. ${ctx.text}`);
        return NaN;
    }
  }

  visitLiteral(ctx: LiteralContext) {
    return this.visitChild(ctx);
  }

  visitDecimal(ctx: DecimalContext) {
    return this.pushStack(ctx)(
      ctx.text.includes('.') ? parseFloat(ctx.text) : parseInt(ctx.text, 10)
    );
  }

  visitBinary(ctx: BinaryContext) {
    return this.pushStack(ctx)(parseInt(ctx.text.substring(2), 2));
  }

  visitOctal(ctx: OctalContext) {
    return this.pushStack(ctx)(parseInt(ctx.text.substring(2), 8));
  }

  visitHexadecimal(ctx: HexadecimalContext) {
    return this.pushStack(ctx)(parseInt(ctx.text.substring(2), 16));
  }

  protected defaultResult(): number {
    return NaN;
  }

  protected visitChild(ctx: ParserRuleContext) {
    return this.visit(ctx.children[0]);
  }

  protected visitOperationalExpression(ctx: ParserRuleContext) {
    switch (ctx.children.length) {
      case 1:
        return this.visitChild(ctx);
      case 3:
        return this.pushStack(ctx)(this.visitBinaryExpression(ctx));
      default:
        // throw new Error(`Unexpected expression. ${ctx.text}`);
        return NaN;
    }
  }

  protected visitUnaryExpression(ctx: ParserRuleContext) {
    switch (ctx.children[0].text) {
      case '~':
        return this.pushStack(ctx)(~this.visit(ctx.children[1]));
      case '+':
        return this.pushStack(ctx)(this.visit(ctx.children[1]));
      case '-':
        return this.pushStack(ctx)(-this.visit(ctx.children[1]));
      default:
        // throw new Error(`Unexpected operator. ${ctx.children[0].text}`);
        return NaN;
    }
  }

  protected visitBinaryExpression(ctx: ParserRuleContext) {
    const left = this.visit(ctx.children[0]);
    const right = this.visit(ctx.children[2]);
    switch (ctx.children[1].text) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '**':
        return left ** right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      case '>>>':
        return left >>> right;
      case '>>':
        return left >> right;
      case '<<':
        return left << right;
      case '&':
        return left & right;
      case '^':
        return left ^ right;
      case '|':
        return left | right;
      default:
        return NaN;
      // throw new Error(`Unexpected operator. ${ctx.children[1].text}`);
    }
  }

  protected pushStack(ctx: ParserRuleContext) {
    const expression = ctx.text;
    if (this.currentStack && this.currentStack.expression === expression) {
      return (result: number) => result;
    }

    const parent = this.currentStack;
    this.currentStack = { expression, result: NaN, parent, children: [] };

    if (!this.stack) this.stack = this.currentStack;
    if (parent) parent.children.push(this.currentStack);

    return (result: number) => {
      this.currentStack.result = result;
      this.currentStack = this.currentStack.parent;
      return result;
    };
  }
}

class ErrorListener implements ANTLRErrorListener<any> {

  syntaxError(
    recognizer: Recognizer<any, any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    throw new ExpressionError(msg, line, column);
  }
}
