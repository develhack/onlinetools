// Generated from src/app/service/calculation/Expression.g4 by ANTLR 4.6-SNAPSHOT
// tslint:disable

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RootContext } from "./ExpressionParser";
import { ExpressionContext } from "./ExpressionParser";
import { LogicalExpressionContext } from "./ExpressionParser";
import { BitwiseExpressionContext } from "./ExpressionParser";
import { AddingExpressionContext } from "./ExpressionParser";
import { MultiplyingExpressionContext } from "./ExpressionParser";
import { ClauseContext } from "./ExpressionParser";
import { UnaryPrefixOperatorContext } from "./ExpressionParser";
import { AddingOperatorContext } from "./ExpressionParser";
import { MultiplyingOperatorContext } from "./ExpressionParser";
import { BitwiseOperatorContext } from "./ExpressionParser";
import { LogicalOperatorContext } from "./ExpressionParser";
import { LiteralContext } from "./ExpressionParser";
import { DecimalContext } from "./ExpressionParser";
import { BinaryContext } from "./ExpressionParser";
import { OctalContext } from "./ExpressionParser";
import { HexadecimalContext } from "./ExpressionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExpressionParser`.
 */
export interface ExpressionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExpressionParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.bitwiseExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.bitwiseExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	enterAddingExpression?: (ctx: AddingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	exitAddingExpression?: (ctx: AddingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.clause`.
	 * @param ctx the parse tree
	 */
	enterClause?: (ctx: ClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.clause`.
	 * @param ctx the parse tree
	 */
	exitClause?: (ctx: ClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.unaryPrefixOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryPrefixOperator?: (ctx: UnaryPrefixOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.unaryPrefixOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryPrefixOperator?: (ctx: UnaryPrefixOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	enterAddingOperator?: (ctx: AddingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	exitAddingOperator?: (ctx: AddingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.decimal`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.decimal`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.octal`.
	 * @param ctx the parse tree
	 */
	enterOctal?: (ctx: OctalContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.octal`.
	 * @param ctx the parse tree
	 */
	exitOctal?: (ctx: OctalContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionParser.hexadecimal`.
	 * @param ctx the parse tree
	 */
	enterHexadecimal?: (ctx: HexadecimalContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionParser.hexadecimal`.
	 * @param ctx the parse tree
	 */
	exitHexadecimal?: (ctx: HexadecimalContext) => void;
}

