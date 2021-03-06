// Generated from /Users/suk2/git/onlinetools/src/app/service/calculation/Expression.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExpressionLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, DECIMAL=16, 
		BINARY=17, OCTAL=18, HEXADECIMAL=19, WS=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "DECIMAL", "BINARY", 
		"OCTAL", "HEXADECIMAL", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", "'~'", "'+'", "'-'", "'**'", "'*'", "'/'", "'%'", 
		"'>>>'", "'>>'", "'<<'", "'&'", "'^'", "'|'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, "DECIMAL", "BINARY", "OCTAL", "HEXADECIMAL", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ExpressionLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Expression.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\26\u0080\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\6\3\6\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f"+
		"\3\f\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\6\21P\n\21\r\21\16"+
		"\21Q\3\21\3\21\7\21V\n\21\f\21\16\21Y\13\21\5\21[\n\21\3\21\3\21\6\21"+
		"_\n\21\r\21\16\21`\5\21c\n\21\3\22\3\22\3\22\6\22h\n\22\r\22\16\22i\3"+
		"\23\3\23\3\23\6\23o\n\23\r\23\16\23p\3\24\3\24\3\24\6\24v\n\24\r\24\16"+
		"\24w\3\25\6\25{\n\25\r\25\16\25|\3\25\3\25\2\2\26\3\3\5\4\7\5\t\6\13\7"+
		"\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25"+
		")\26\3\2\n\3\2\62;\4\2DDdd\3\2\62\63\4\2QQqq\3\2\629\4\2ZZzz\5\2\62;C"+
		"Hch\5\2\13\f\17\17\"\"\2\u0088\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t"+
		"\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2"+
		"\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2"+
		"\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\3"+
		"+\3\2\2\2\5-\3\2\2\2\7/\3\2\2\2\t\61\3\2\2\2\13\63\3\2\2\2\r\65\3\2\2"+
		"\2\178\3\2\2\2\21:\3\2\2\2\23<\3\2\2\2\25>\3\2\2\2\27B\3\2\2\2\31E\3\2"+
		"\2\2\33H\3\2\2\2\35J\3\2\2\2\37L\3\2\2\2!b\3\2\2\2#d\3\2\2\2%k\3\2\2\2"+
		"\'r\3\2\2\2)z\3\2\2\2+,\7*\2\2,\4\3\2\2\2-.\7+\2\2.\6\3\2\2\2/\60\7\u0080"+
		"\2\2\60\b\3\2\2\2\61\62\7-\2\2\62\n\3\2\2\2\63\64\7/\2\2\64\f\3\2\2\2"+
		"\65\66\7,\2\2\66\67\7,\2\2\67\16\3\2\2\289\7,\2\29\20\3\2\2\2:;\7\61\2"+
		"\2;\22\3\2\2\2<=\7\'\2\2=\24\3\2\2\2>?\7@\2\2?@\7@\2\2@A\7@\2\2A\26\3"+
		"\2\2\2BC\7@\2\2CD\7@\2\2D\30\3\2\2\2EF\7>\2\2FG\7>\2\2G\32\3\2\2\2HI\7"+
		"(\2\2I\34\3\2\2\2JK\7`\2\2K\36\3\2\2\2LM\7~\2\2M \3\2\2\2NP\t\2\2\2ON"+
		"\3\2\2\2PQ\3\2\2\2QO\3\2\2\2QR\3\2\2\2RZ\3\2\2\2SW\7\60\2\2TV\t\2\2\2"+
		"UT\3\2\2\2VY\3\2\2\2WU\3\2\2\2WX\3\2\2\2X[\3\2\2\2YW\3\2\2\2ZS\3\2\2\2"+
		"Z[\3\2\2\2[c\3\2\2\2\\^\7\60\2\2]_\t\2\2\2^]\3\2\2\2_`\3\2\2\2`^\3\2\2"+
		"\2`a\3\2\2\2ac\3\2\2\2bO\3\2\2\2b\\\3\2\2\2c\"\3\2\2\2de\7\62\2\2eg\t"+
		"\3\2\2fh\t\4\2\2gf\3\2\2\2hi\3\2\2\2ig\3\2\2\2ij\3\2\2\2j$\3\2\2\2kl\7"+
		"\62\2\2ln\t\5\2\2mo\t\6\2\2nm\3\2\2\2op\3\2\2\2pn\3\2\2\2pq\3\2\2\2q&"+
		"\3\2\2\2rs\7\62\2\2su\t\7\2\2tv\t\b\2\2ut\3\2\2\2vw\3\2\2\2wu\3\2\2\2"+
		"wx\3\2\2\2x(\3\2\2\2y{\t\t\2\2zy\3\2\2\2{|\3\2\2\2|z\3\2\2\2|}\3\2\2\2"+
		"}~\3\2\2\2~\177\b\25\2\2\177*\3\2\2\2\f\2QWZ`bipw|\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}