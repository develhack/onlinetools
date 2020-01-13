// Generated from src/app/service/calculation/Expression.g4 by ANTLR 4.6-SNAPSHOT
// tslint:disable

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExpressionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExpressionVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExpressionParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.logicalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.bitwiseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseExpression?: (ctx: BitwiseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.addingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingExpression?: (ctx: AddingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClause?: (ctx: ClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.unaryPrefixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPrefixOperator?: (ctx: UnaryPrefixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.addingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingOperator?: (ctx: AddingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOperator?: (ctx: BitwiseOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.logicalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.octal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctal?: (ctx: OctalContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionParser.hexadecimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexadecimal?: (ctx: HexadecimalContext) => Result;
}

