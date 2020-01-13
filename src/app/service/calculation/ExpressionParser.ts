// Generated from src/app/service/calculation/Expression.g4 by ANTLR 4.6-SNAPSHOT
// tslint:disable

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExpressionListener } from "./ExpressionListener";
import { ExpressionVisitor } from "./ExpressionVisitor";


export class ExpressionParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly DECIMAL = 16;
	public static readonly BINARY = 17;
	public static readonly OCTAL = 18;
	public static readonly HEXADECIMAL = 19;
	public static readonly WS = 20;
	public static readonly RULE_root = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_logicalExpression = 2;
	public static readonly RULE_bitwiseExpression = 3;
	public static readonly RULE_addingExpression = 4;
	public static readonly RULE_multiplyingExpression = 5;
	public static readonly RULE_clause = 6;
	public static readonly RULE_unaryPrefixOperator = 7;
	public static readonly RULE_addingOperator = 8;
	public static readonly RULE_multiplyingOperator = 9;
	public static readonly RULE_bitwiseOperator = 10;
	public static readonly RULE_logicalOperator = 11;
	public static readonly RULE_literal = 12;
	public static readonly RULE_decimal = 13;
	public static readonly RULE_binary = 14;
	public static readonly RULE_octal = 15;
	public static readonly RULE_hexadecimal = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "expression", "logicalExpression", "bitwiseExpression", "addingExpression", 
		"multiplyingExpression", "clause", "unaryPrefixOperator", "addingOperator", 
		"multiplyingOperator", "bitwiseOperator", "logicalOperator", "literal", 
		"decimal", "binary", "octal", "hexadecimal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'~'", "'+'", "'-'", "'**'", "'*'", "'/'", "'%'", 
		"'>>>'", "'>>'", "'<<'", "'&'", "'^'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "DECIMAL", "BINARY", "OCTAL", "HEXADECIMAL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionParser._LITERAL_NAMES, ExpressionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expression.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExpressionParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExpressionParser.RULE_root);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.literal();
				this.state = 35;
				this.match(ExpressionParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.expression();
				this.state = 38;
				this.match(ExpressionParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExpressionParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.logicalExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public logicalExpression(): LogicalExpressionContext;
	public logicalExpression(_p: number): LogicalExpressionContext;
	// @RuleVersion(0)
	public logicalExpression(_p?: number): LogicalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ExpressionParser.RULE_logicalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 45;
			this.bitwiseExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 53;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_logicalExpression);
					this.state = 47;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 48;
					this.logicalOperator();
					this.state = 49;
					this.bitwiseExpression(0);
					}
					}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public bitwiseExpression(): BitwiseExpressionContext;
	public bitwiseExpression(_p: number): BitwiseExpressionContext;
	// @RuleVersion(0)
	public bitwiseExpression(_p?: number): BitwiseExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BitwiseExpressionContext = new BitwiseExpressionContext(this._ctx, _parentState);
		let _prevctx: BitwiseExpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, ExpressionParser.RULE_bitwiseExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 57;
			this.addingExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BitwiseExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_bitwiseExpression);
					this.state = 59;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 60;
					this.bitwiseOperator();
					this.state = 61;
					this.addingExpression(0);
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public addingExpression(): AddingExpressionContext;
	public addingExpression(_p: number): AddingExpressionContext;
	// @RuleVersion(0)
	public addingExpression(_p?: number): AddingExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AddingExpressionContext = new AddingExpressionContext(this._ctx, _parentState);
		let _prevctx: AddingExpressionContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, ExpressionParser.RULE_addingExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 69;
			this.multiplyingExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 77;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AddingExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_addingExpression);
					this.state = 71;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 72;
					this.addingOperator();
					this.state = 73;
					this.multiplyingExpression(0);
					}
					}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplyingExpression(): MultiplyingExpressionContext;
	public multiplyingExpression(_p: number): MultiplyingExpressionContext;
	// @RuleVersion(0)
	public multiplyingExpression(_p?: number): MultiplyingExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplyingExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, ExpressionParser.RULE_multiplyingExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 81;
			this.clause();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 89;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new MultiplyingExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_multiplyingExpression);
					this.state = 83;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 84;
					this.multiplyingOperator();
					this.state = 85;
					this.clause();
					}
					}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clause(): ClauseContext {
		let _localctx: ClauseContext = new ClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ExpressionParser.RULE_clause);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExpressionParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.match(ExpressionParser.T__0);
				this.state = 93;
				this.expression();
				this.state = 94;
				this.match(ExpressionParser.T__1);
				}
				break;
			case ExpressionParser.T__2:
			case ExpressionParser.T__3:
			case ExpressionParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.unaryPrefixOperator();
				this.state = 97;
				this.clause();
				}
				break;
			case ExpressionParser.DECIMAL:
			case ExpressionParser.BINARY:
			case ExpressionParser.OCTAL:
			case ExpressionParser.HEXADECIMAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryPrefixOperator(): UnaryPrefixOperatorContext {
		let _localctx: UnaryPrefixOperatorContext = new UnaryPrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ExpressionParser.RULE_unaryPrefixOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__2) | (1 << ExpressionParser.T__3) | (1 << ExpressionParser.T__4))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addingOperator(): AddingOperatorContext {
		let _localctx: AddingOperatorContext = new AddingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ExpressionParser.RULE_addingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			_la = this._input.LA(1);
			if (!(_la === ExpressionParser.T__3 || _la === ExpressionParser.T__4)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplyingOperator(): MultiplyingOperatorContext {
		let _localctx: MultiplyingOperatorContext = new MultiplyingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ExpressionParser.RULE_multiplyingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__5) | (1 << ExpressionParser.T__6) | (1 << ExpressionParser.T__7) | (1 << ExpressionParser.T__8))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ExpressionParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__9) | (1 << ExpressionParser.T__10) | (1 << ExpressionParser.T__11))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ExpressionParser.RULE_logicalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__12) | (1 << ExpressionParser.T__13) | (1 << ExpressionParser.T__14))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ExpressionParser.RULE_literal);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExpressionParser.DECIMAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.decimal();
				}
				break;
			case ExpressionParser.BINARY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.binary();
				}
				break;
			case ExpressionParser.OCTAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.octal();
				}
				break;
			case ExpressionParser.HEXADECIMAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.hexadecimal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ExpressionParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(ExpressionParser.DECIMAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ExpressionParser.RULE_binary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(ExpressionParser.BINARY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octal(): OctalContext {
		let _localctx: OctalContext = new OctalContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ExpressionParser.RULE_octal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(ExpressionParser.OCTAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexadecimal(): HexadecimalContext {
		let _localctx: HexadecimalContext = new HexadecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ExpressionParser.RULE_hexadecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(ExpressionParser.HEXADECIMAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.logicalExpression_sempred(_localctx as LogicalExpressionContext, predIndex);

		case 3:
			return this.bitwiseExpression_sempred(_localctx as BitwiseExpressionContext, predIndex);

		case 4:
			return this.addingExpression_sempred(_localctx as AddingExpressionContext, predIndex);

		case 5:
			return this.multiplyingExpression_sempred(_localctx as MultiplyingExpressionContext, predIndex);
		}
		return true;
	}
	private logicalExpression_sempred(_localctx: LogicalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private bitwiseExpression_sempred(_localctx: BitwiseExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private addingExpression_sempred(_localctx: AddingExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private multiplyingExpression_sempred(_localctx: MultiplyingExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x16\x81\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02+\n\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x046" +
		"\n\x04\f\x04\x0E\x049\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05B\n\x05\f\x05\x0E\x05E\v\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06N\n\x06\f\x06\x0E\x06Q\v\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07Z\n\x07\f" +
		"\x07\x0E\x07]\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\bg\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0Ew\n\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x02\x02\x06\x06\b\n\f\x13" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x07\x03\x02" +
		"\x05\x07\x03\x02\x06\x07\x03\x02\b\v\x03\x02\f\x0E\x03\x02\x0F\x11y\x02" +
		"*\x03\x02\x02\x02\x04,\x03\x02\x02\x02\x06.\x03\x02\x02\x02\b:\x03\x02" +
		"\x02\x02\nF\x03\x02\x02\x02\fR\x03\x02\x02\x02\x0Ef\x03\x02\x02\x02\x10" +
		"h\x03\x02\x02\x02\x12j\x03\x02\x02\x02\x14l\x03\x02\x02\x02\x16n\x03\x02" +
		"\x02\x02\x18p\x03\x02\x02\x02\x1Av\x03\x02\x02\x02\x1Cx\x03\x02\x02\x02" +
		"\x1Ez\x03\x02\x02\x02 |\x03\x02\x02\x02\"~\x03\x02\x02\x02$%\x05\x1A\x0E" +
		"\x02%&\x07\x02\x02\x03&+\x03\x02\x02\x02\'(\x05\x04\x03\x02()\x07\x02" +
		"\x02\x03)+\x03\x02\x02\x02*$\x03\x02\x02\x02*\'\x03\x02\x02\x02+\x03\x03" +
		"\x02\x02\x02,-\x05\x06\x04\x02-\x05\x03\x02\x02\x02./\b\x04\x01\x02/0" +
		"\x05\b\x05\x0207\x03\x02\x02\x0212\f\x04\x02\x0223\x05\x18\r\x0234\x05" +
		"\b\x05\x0246\x03\x02\x02\x0251\x03\x02\x02\x0269\x03\x02\x02\x0275\x03" +
		"\x02\x02\x0278\x03\x02\x02\x028\x07\x03\x02\x02\x0297\x03\x02\x02\x02" +
		":;\b\x05\x01\x02;<\x05\n\x06\x02<C\x03\x02\x02\x02=>\f\x04\x02\x02>?\x05" +
		"\x16\f\x02?@\x05\n\x06\x02@B\x03\x02\x02\x02A=\x03\x02\x02\x02BE\x03\x02" +
		"\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\t\x03\x02\x02\x02EC\x03" +
		"\x02\x02\x02FG\b\x06\x01\x02GH\x05\f\x07\x02HO\x03\x02\x02\x02IJ\f\x04" +
		"\x02\x02JK\x05\x12\n\x02KL\x05\f\x07\x02LN\x03\x02\x02\x02MI\x03\x02\x02" +
		"\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\v\x03\x02" +
		"\x02\x02QO\x03\x02\x02\x02RS\b\x07\x01\x02ST\x05\x0E\b\x02T[\x03\x02\x02" +
		"\x02UV\f\x04\x02\x02VW\x05\x14\v\x02WX\x05\x0E\b\x02XZ\x03\x02\x02\x02" +
		"YU\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\\r\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\x03\x02\x02_`\x05\x04" +
		"\x03\x02`a\x07\x04\x02\x02ag\x03\x02\x02\x02bc\x05\x10\t\x02cd\x05\x0E" +
		"\b\x02dg\x03\x02\x02\x02eg\x05\x1A\x0E\x02f^\x03\x02\x02\x02fb\x03\x02" +
		"\x02\x02fe\x03\x02\x02\x02g\x0F\x03\x02\x02\x02hi\t\x02\x02\x02i\x11\x03" +
		"\x02\x02\x02jk\t\x03\x02\x02k\x13\x03\x02\x02\x02lm\t\x04\x02\x02m\x15" +
		"\x03\x02\x02\x02no\t\x05\x02\x02o\x17\x03\x02\x02\x02pq\t\x06\x02\x02" +
		"q\x19\x03\x02\x02\x02rw\x05\x1C\x0F\x02sw\x05\x1E\x10\x02tw\x05 \x11\x02" +
		"uw\x05\"\x12\x02vr\x03\x02\x02\x02vs\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"vu\x03\x02\x02\x02w\x1B\x03\x02\x02\x02xy\x07\x12\x02\x02y\x1D\x03\x02" +
		"\x02\x02z{\x07\x13\x02\x02{\x1F\x03\x02\x02\x02|}\x07\x14\x02\x02}!\x03" +
		"\x02\x02\x02~\x7F\x07\x15\x02\x02\x7F#\x03\x02\x02\x02\t*7CO[fv";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionParser.__ATN) {
			ExpressionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionParser._serializedATN));
		}

		return ExpressionParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public EOF(): TerminalNode { return this.getToken(ExpressionParser.EOF, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_root; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_expression; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public logicalOperator(): LogicalOperatorContext | undefined {
		return this.tryGetRuleContext(0, LogicalOperatorContext);
	}
	public bitwiseExpression(): BitwiseExpressionContext {
		return this.getRuleContext(0, BitwiseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseExpressionContext extends ParserRuleContext {
	public bitwiseExpression(): BitwiseExpressionContext | undefined {
		return this.tryGetRuleContext(0, BitwiseExpressionContext);
	}
	public bitwiseOperator(): BitwiseOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOperatorContext);
	}
	public addingExpression(): AddingExpressionContext {
		return this.getRuleContext(0, AddingExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_bitwiseExpression; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterBitwiseExpression) {
			listener.enterBitwiseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitBitwiseExpression) {
			listener.exitBitwiseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitBitwiseExpression) {
			return visitor.visitBitwiseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddingExpressionContext extends ParserRuleContext {
	public addingExpression(): AddingExpressionContext | undefined {
		return this.tryGetRuleContext(0, AddingExpressionContext);
	}
	public addingOperator(): AddingOperatorContext | undefined {
		return this.tryGetRuleContext(0, AddingOperatorContext);
	}
	public multiplyingExpression(): MultiplyingExpressionContext {
		return this.getRuleContext(0, MultiplyingExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_addingExpression; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterAddingExpression) {
			listener.enterAddingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitAddingExpression) {
			listener.exitAddingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitAddingExpression) {
			return visitor.visitAddingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplyingExpressionContext);
	}
	public multiplyingOperator(): MultiplyingOperatorContext | undefined {
		return this.tryGetRuleContext(0, MultiplyingOperatorContext);
	}
	public clause(): ClauseContext {
		return this.getRuleContext(0, ClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public unaryPrefixOperator(): UnaryPrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryPrefixOperatorContext);
	}
	public clause(): ClauseContext | undefined {
		return this.tryGetRuleContext(0, ClauseContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_clause; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterClause) {
			listener.enterClause(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitClause) {
			listener.exitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitClause) {
			return visitor.visitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryPrefixOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_unaryPrefixOperator; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterUnaryPrefixOperator) {
			listener.enterUnaryPrefixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitUnaryPrefixOperator) {
			listener.exitUnaryPrefixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitUnaryPrefixOperator) {
			return visitor.visitUnaryPrefixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddingOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_addingOperator; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterAddingOperator) {
			listener.enterAddingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitAddingOperator) {
			listener.exitAddingOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitAddingOperator) {
			return visitor.visitAddingOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_multiplyingOperator; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterMultiplyingOperator) {
			listener.enterMultiplyingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitMultiplyingOperator) {
			listener.exitMultiplyingOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitMultiplyingOperator) {
			return visitor.visitMultiplyingOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitBitwiseOperator) {
			return visitor.visitBitwiseOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	public octal(): OctalContext | undefined {
		return this.tryGetRuleContext(0, OctalContext);
	}
	public hexadecimal(): HexadecimalContext | undefined {
		return this.tryGetRuleContext(0, HexadecimalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_literal; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode { return this.getToken(ExpressionParser.DECIMAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_decimal; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterDecimal) {
			listener.enterDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitDecimal) {
			listener.exitDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitDecimal) {
			return visitor.visitDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	public BINARY(): TerminalNode { return this.getToken(ExpressionParser.BINARY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_binary; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitBinary) {
			listener.exitBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitBinary) {
			return visitor.visitBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OctalContext extends ParserRuleContext {
	public OCTAL(): TerminalNode { return this.getToken(ExpressionParser.OCTAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_octal; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterOctal) {
			listener.enterOctal(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitOctal) {
			listener.exitOctal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitOctal) {
			return visitor.visitOctal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexadecimalContext extends ParserRuleContext {
	public HEXADECIMAL(): TerminalNode { return this.getToken(ExpressionParser.HEXADECIMAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_hexadecimal; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterHexadecimal) {
			listener.enterHexadecimal(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitHexadecimal) {
			listener.exitHexadecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitHexadecimal) {
			return visitor.visitHexadecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


