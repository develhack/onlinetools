grammar Expression;

root
    : literal EOF
    | expression EOF
    ;

expression
    : logicalExpression
    ;

logicalExpression
    : logicalExpression logicalOperator bitwiseExpression
    | bitwiseExpression
    ;

bitwiseExpression
    : bitwiseExpression bitwiseOperator addingExpression
    | addingExpression
    ;

addingExpression
    : addingExpression addingOperator multiplyingExpression
    | multiplyingExpression
    ;

multiplyingExpression
    : multiplyingExpression multiplyingOperator clause
    | clause
    ;

clause
    : '(' expression ')'
    | unaryPrefixOperator clause
    | literal
    ;

unaryPrefixOperator
    : '~'
    | '+'
    | '-'
    ;

addingOperator
    : '+'
    | '-'
    ;

multiplyingOperator
    : '**'
    | '*'
    | '/'
    | '%'
    ;

bitwiseOperator
    : '>>>'
    | '>>'
    | '<<'
    ;

logicalOperator
    : '&'
    | '^'
    | '|'
    ;

literal
    : decimal
    | binary
    | octal
    | hexadecimal
    ;

decimal
    : DECIMAL
    ;

binary
    : BINARY
    ;

octal
    : OCTAL
    ;

hexadecimal
    : HEXADECIMAL
    ;

DECIMAL
    : [0-9]+('.' [0-9]*)?|'.'[0-9]+
    ;

BINARY
    : '0'[bB][0-1]+
    ;

OCTAL
    : '0'[oO][0-7]+
    ;

HEXADECIMAL
    : '0'[xX][0-9a-fA-F]+
    ;
    
WS
    : [ \n\t\r]+ -> skip
    ;
