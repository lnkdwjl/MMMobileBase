define(function(){this.Handlebars={},function(a){a.VERSION="1.0.0-rc.3",a.COMPILER_REVISION=2,a.REVISION_CHANGES={1:"<= 1.0.rc.2",2:">= 1.0.0-rc.3"},a.helpers={},a.partials={},a.registerHelper=function(a,b,c){c&&(b.not=c),this.helpers[a]=b},a.registerPartial=function(a,b){this.partials[a]=b},a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new Error("Could not find property '"+a+"'")});var b=Object.prototype.toString,c="[object Function]";a.registerHelper("blockHelperMissing",function(d,e){var f=e.inverse||function(){},g=e.fn,h=b.call(d);return h===c&&(d=d.call(this)),d===!0?g(this):d===!1||null==d?f(this):"[object Array]"===h?d.length>0?a.helpers.each(d,e):f(this):g(d)}),a.K=function(){},a.createFrame=Object.create||function(b){a.K.prototype=b;var c=new a.K;return a.K.prototype=null,c},a.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(b,c){if(a.logger.level<=b){var d=a.logger.methodMap[b];"undefined"!=typeof console&&console[d]&&console[d].call(console,c)}}},a.log=function(b,c){a.logger.log(b,c)},a.registerHelper("each",function(b,c){var d,e=c.fn,f=c.inverse,g=0,h="";if(c.data&&(d=a.createFrame(c.data)),b&&"object"==typeof b)if(b instanceof Array)for(var i=b.length;i>g;g++)d&&(d.index=g),h+=e(b[g],{data:d});else for(var j in b)b.hasOwnProperty(j)&&(d&&(d.key=j),h+=e(b[j],{data:d}),g++);return 0===g&&(h=f(this)),h}),a.registerHelper("if",function(d,e){var f=b.call(d);return f===c&&(d=d.call(this)),!d||a.Utils.isEmpty(d)?e.inverse(this):e.fn(this)}),a.registerHelper("unless",function(b,c){var d=c.fn,e=c.inverse;return c.fn=e,c.inverse=d,a.helpers["if"].call(this,b,c)}),a.registerHelper("with",function(a,b){return b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}(this.Handlebars);var a=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,partialName:25,params:26,hash:27,DATA:28,param:29,STRING:30,INTEGER:31,BOOLEAN:32,hashSegments:33,hashSegment:34,ID:35,EQUALS:36,PARTIAL_NAME:37,pathSegments:38,SEP:39,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"DATA",30:"STRING",31:"INTEGER",32:"BOOLEAN",35:"ID",36:"EQUALS",37:"PARTIAL_NAME",39:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[26,2],[26,1],[29,1],[29,1],[29,1],[29,1],[29,1],[27,1],[33,2],[33,1],[34,3],[34,3],[34,3],[34,3],[34,3],[25,1],[21,1],[38,3],[38,1]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return f[g-1];case 2:this.$=new d.ProgramNode([],f[g]);break;case 3:this.$=new d.ProgramNode(f[g-2],f[g]);break;case 4:this.$=new d.ProgramNode(f[g-1],[]);break;case 5:this.$=new d.ProgramNode(f[g]);break;case 6:this.$=new d.ProgramNode([],[]);break;case 7:this.$=new d.ProgramNode([]);break;case 8:this.$=[f[g]];break;case 9:f[g-1].push(f[g]),this.$=f[g-1];break;case 10:this.$=new d.BlockNode(f[g-2],f[g-1].inverse,f[g-1],f[g]);break;case 11:this.$=new d.BlockNode(f[g-2],f[g-1],f[g-1].inverse,f[g]);break;case 12:this.$=f[g];break;case 13:this.$=f[g];break;case 14:this.$=new d.ContentNode(f[g]);break;case 15:this.$=new d.CommentNode(f[g]);break;case 16:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1]);break;case 17:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1]);break;case 18:this.$=f[g-1];break;case 19:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1]);break;case 20:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1],!0);break;case 21:this.$=new d.PartialNode(f[g-1]);break;case 22:this.$=new d.PartialNode(f[g-2],f[g-1]);break;case 23:break;case 24:this.$=[[f[g-2]].concat(f[g-1]),f[g]];break;case 25:this.$=[[f[g-1]].concat(f[g]),null];break;case 26:this.$=[[f[g-1]],f[g]];break;case 27:this.$=[[f[g]],null];break;case 28:this.$=[[new d.DataNode(f[g])],null];break;case 29:f[g-1].push(f[g]),this.$=f[g-1];break;case 30:this.$=[f[g]];break;case 31:this.$=f[g];break;case 32:this.$=new d.StringNode(f[g]);break;case 33:this.$=new d.IntegerNode(f[g]);break;case 34:this.$=new d.BooleanNode(f[g]);break;case 35:this.$=new d.DataNode(f[g]);break;case 36:this.$=new d.HashNode(f[g]);break;case 37:f[g-1].push(f[g]),this.$=f[g-1];break;case 38:this.$=[f[g]];break;case 39:this.$=[f[g-2],f[g]];break;case 40:this.$=[f[g-2],new d.StringNode(f[g])];break;case 41:this.$=[f[g-2],new d.IntegerNode(f[g])];break;case 42:this.$=[f[g-2],new d.BooleanNode(f[g])];break;case 43:this.$=[f[g-2],new d.DataNode(f[g])];break;case 44:this.$=new d.PartialNameNode(f[g]);break;case 45:this.$=new d.IdNode(f[g]);break;case 46:f[g-2].push(f[g]),this.$=f[g-2];break;case 47:this.$=[f[g]]}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],24:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],24:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],24:[1,16]},{17:23,18:[1,22],21:24,28:[1,25],35:[1,27],38:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{4:28,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{17:30,21:24,28:[1,25],35:[1,27],38:26},{17:31,21:24,28:[1,25],35:[1,27],38:26},{17:32,21:24,28:[1,25],35:[1,27],38:26},{25:33,37:[1,34]},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],24:[1,16]},{17:23,21:24,28:[1,25],35:[1,27],38:26},{5:[2,4],7:35,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],24:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23]},{18:[1,36]},{18:[2,27],21:41,26:37,27:38,28:[1,45],29:39,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,28]},{18:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],35:[2,45],39:[1,48]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],39:[2,47]},{10:49,20:[1,50]},{10:51,20:[1,50]},{18:[1,52]},{18:[1,53]},{18:[1,54]},{18:[1,55],21:56,35:[1,27],38:26},{18:[2,44],35:[2,44]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],24:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{18:[2,25],21:41,27:57,28:[1,45],29:58,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,26]},{18:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],35:[2,30]},{18:[2,36],34:59,35:[1,60]},{18:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],35:[2,31]},{18:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],35:[2,32]},{18:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],35:[2,33]},{18:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],35:[2,34]},{18:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],35:[2,35]},{18:[2,38],35:[2,38]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],36:[1,61],39:[2,47]},{35:[1,62]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{21:63,35:[1,27],38:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21]},{18:[1,64]},{18:[2,24]},{18:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],35:[2,29]},{18:[2,37],35:[2,37]},{36:[1,61]},{21:65,28:[1,69],30:[1,66],31:[1,67],32:[1,68],35:[1,27],38:26},{18:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],35:[2,46],39:[2,46]},{18:[1,70]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22]},{18:[2,39],35:[2,39]},{18:[2,40],35:[2,40]},{18:[2,41],35:[2,41]},{18:[2,42],35:[2,42]},{18:[2,43],35:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]}],defaultActions:{17:[2,1],25:[2,28],38:[2,26],57:[2,24]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,2*-1*t),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){switch(c){case 0:if("\\"!==b.yytext.slice(-1)&&this.begin("mu"),"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1),this.begin("emu")),b.yytext)return 14;break;case 1:return 14;case 2:return"\\"!==b.yytext.slice(-1)&&this.popState(),"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1)),14;case 3:return b.yytext=b.yytext.substr(0,b.yyleng-4),this.popState(),15;case 4:return this.begin("par"),24;case 5:return 16;case 6:return 20;case 7:return 19;case 8:return 19;case 9:return 23;case 10:return 23;case 11:this.popState(),this.begin("com");break;case 12:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.popState(),15;case 13:return 22;case 14:return 36;case 15:return 35;case 16:return 35;case 17:return 39;case 18:break;case 19:return this.popState(),18;case 20:return this.popState(),18;case 21:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),30;case 22:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\'/g,"'"),30;case 23:return b.yytext=b.yytext.substr(1),28;case 24:return 32;case 25:return 32;case 26:return 31;case 27:return 35;case 28:return b.yytext=b.yytext.substr(1,b.yyleng-2),35;case 29:return"INVALID";case 30:break;case 31:return this.popState(),37;case 32:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:\s+)/,/^(?:[a-zA-Z0-9_$-/]+)/,/^(?:$)/],a.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},par:{rules:[30,31],inclusive:!1},INITIAL:{rules:[0,1,32],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();Handlebars.Parser=a,Handlebars.parse=function(a){return a.constructor===Handlebars.AST.ProgramNode?a:(Handlebars.Parser.yy=Handlebars.AST,Handlebars.Parser.parse(a))},Handlebars.print=function(a){return(new Handlebars.PrintVisitor).accept(a)},function(){Handlebars.AST={},Handlebars.AST.ProgramNode=function(a,b){this.type="program",this.statements=a,b&&(this.inverse=new Handlebars.AST.ProgramNode(b))},Handlebars.AST.MustacheNode=function(a,b,c){this.type="mustache",this.escaped=!c,this.hash=b;var d=this.id=a[0],e=this.params=a.slice(1),f=this.eligibleHelper=d.isSimple;this.isHelper=f&&(e.length||b)},Handlebars.AST.PartialNode=function(a,b){this.type="partial",this.partialName=a,this.context=b};var a=function(a,b){if(a.original!==b.original)throw new Handlebars.Exception(a.original+" doesn't match "+b.original)};Handlebars.AST.BlockNode=function(b,c,d,e){a(b.id,e),this.type="block",this.mustache=b,this.program=c,this.inverse=d,this.inverse&&!this.program&&(this.isInverse=!0)},Handlebars.AST.ContentNode=function(a){this.type="content",this.string=a},Handlebars.AST.HashNode=function(a){this.type="hash",this.pairs=a},Handlebars.AST.IdNode=function(a){this.type="ID",this.original=a.join(".");for(var b=[],c=0,d=0,e=a.length;e>d;d++){var f=a[d];if(".."===f||"."===f||"this"===f){if(b.length>0)throw new Handlebars.Exception("Invalid path: "+this.original);".."===f?c++:this.isScoped=!0}else b.push(f)}this.parts=b,this.string=b.join("."),this.depth=c,this.isSimple=1===a.length&&!this.isScoped&&0===c,this.stringModeValue=this.string},Handlebars.AST.PartialNameNode=function(a){this.type="PARTIAL_NAME",this.name=a},Handlebars.AST.DataNode=function(a){this.type="DATA",this.id=a},Handlebars.AST.StringNode=function(a){this.type="STRING",this.string=a,this.stringModeValue=a},Handlebars.AST.IntegerNode=function(a){this.type="INTEGER",this.integer=a,this.stringModeValue=Number(a)},Handlebars.AST.BooleanNode=function(a){this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},Handlebars.AST.CommentNode=function(a){this.type="comment",this.comment=a}}();var b=["description","fileName","lineNumber","message","name","number","stack"];return Handlebars.Exception=function(){for(var a=Error.prototype.constructor.apply(this,arguments),c=0;c<b.length;c++)this[b[c]]=a[b[c]]},Handlebars.Exception.prototype=new Error,Handlebars.SafeString=function(a){this.string=a},Handlebars.SafeString.prototype.toString=function(){return this.string.toString()},function(){var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/[&<>"'`]/g,c=/[&<>"'`]/,d=function(b){return a[b]||"&amp;"};Handlebars.Utils={escapeExpression:function(a){return a instanceof Handlebars.SafeString?a.toString():null==a||a===!1?"":c.test(a)?a.replace(b,d):a},isEmpty:function(a){return a||0===a?"[object Array]"===Object.prototype.toString.call(a)&&0===a.length?!0:!1:!0}}}(),Handlebars.Compiler=function(){},Handlebars.JavaScriptCompiler=function(){},function(a,b){a.prototype={compiler:a,disassemble:function(){for(var a,b,c,d=this.opcodes,e=[],f=0,g=d.length;g>f;f++)if(a=d[f],"DECLARE"===a.opcode)e.push("DECLARE "+a.name+"="+a.value);else{b=[];for(var h=0;h<a.args.length;h++)c=a.args[h],"string"==typeof c&&(c='"'+c.replace("\n","\\n")+'"'),b.push(c);e.push(a.opcode+" "+b.join(" "))}return e.join("\n")},equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||d.args.length!==e.args.length)return!1;for(var f=0;f<d.args.length;f++)if(d.args[f]!==e.args[f])return!1}return!0},guid:0,compile:function(a,b){this.children=[],this.depths={list:[]},this.options=b;var c=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0},c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.program(a)},accept:function(a){return this[a.type](a)},program:function(a){var b,c=a.statements;this.opcodes=[];for(var d=0,e=c.length;e>d;d++)b=c[d],this[b.type](b);return this.isSimple=1===e,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b,c=(new this.compiler).compile(a,this.options),d=this.guid++;this.usePartial=this.usePartial||c.usePartial,this.children[d]=c;for(var e=0,f=c.depths.list.length;f>e;e++)b=c.depths.list[e],2>b||this.addDepth(b-1);return d},block:function(a){var b=a.mustache,c=a.program,d=a.inverse;c&&(c=this.compileProgram(c)),d&&(d=this.compileProgram(d));var e=this.classifyMustache(b);"helper"===e?this.helperMustache(b,c,d):"simple"===e?(this.simpleMustache(b),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousMustache(b,c,d),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(a){var b,c,d=a.pairs;this.opcode("pushHash");for(var e=0,f=d.length;f>e;e++)b=d[e],c=b[1],this.options.stringParams?this.opcode("pushStringParam",c.stringModeValue,c.type):this.accept(c),this.opcode("assignToHash",b[0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0,a.context?this.ID(a.context):this.opcode("push","depth0"),this.opcode("invokePartial",b.name),this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){var b=this.options,c=this.classifyMustache(a);"simple"===c?this.simpleMustache(a):"helper"===c?this.helperMustache(a):this.ambiguousMustache(a),a.escaped&&!b.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(a,b,c){var d=a.id,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("invokeAmbiguous",e,f)},simpleMustache:function(a){var b=a.id;"DATA"===b.type?this.DATA(b):b.parts.length?this.ID(b):(this.addDepth(b.depth),this.opcode("getContext",b.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperMustache:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.id.parts[0];if(this.options.knownHelpers[e])this.opcode("invokeKnownHelper",d.length,e);else{if(this.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper "+e);this.opcode("invokeHelper",d.length,e)}},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0];b?this.opcode("lookupOnContext",a.parts[0]):this.opcode("pushContext");for(var c=1,d=a.parts.length;d>c;c++)this.opcode("lookup",a.parts[c])},DATA:function(a){this.options.data=!0,this.opcode("lookupData",a.id)},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("pushLiteral",a.integer)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:[].slice.call(arguments,1)})},declare:function(a,b){this.opcodes.push({opcode:"DECLARE",name:a,value:b})},addDepth:function(a){if(isNaN(a))throw new Error("EWOT");0!==a&&(this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a)))},classifyMustache:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;if(c&&!b){var e=a.id.parts[0];d.knownHelpers[e]?b=!0:d.knownHelpersOnly&&(c=!1)}return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b,c=a.length;c--;)b=a[c],this.options.stringParams?(b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",b.stringModeValue,b.type)):this[b.type](b)},setupMustacheParams:function(a){var b=a.params;return this.pushParams(b),a.hash?this.hash(a.hash):this.opcode("emptyHash"),b},setupFullMustacheParams:function(a,b,c){var d=a.params;return this.pushParams(d),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.hash(a.hash):this.opcode("emptyHash"),d}};var c=function(a){this.value=a};b.prototype={nameLookup:function(a,c){return/^[0-9]+$/.test(c)?a+"["+c+"]":b.isValidJavaScriptVariableName(c)?a+"."+c:a+"['"+c+"']"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b||{},Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.compileStack=[],this.inlineStack=[],this.compileChildren(a,b);var e,f=a.opcodes;for(this.i=0,g=f.length;this.i<g;this.i++)e=f[this.i],"DECLARE"===e.opcode?this[e.name]=e.value:this[e.opcode].apply(this,e.args);return this.createFunctionContext(d)},nextOpcode:function(){var a=this.environment.opcodes;return a[this.i+1]},eat:function(){this.i=this.i+1},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = helpers || "+b+".helpers;";this.environment.usePartial&&(c=c+" partials = partials || "+b+".partials;"),this.options.data&&(c+=" data = data || {};"),a.push(c)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);if(b.length>0&&(this.source[1]=this.source[1]+", "+b.join(", ")),!this.isChild)for(var c in this.context.aliases)this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c];this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.source.push("return buffer;");for(var d=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"],e=0,f=this.environment.depths.list.length;f>e;e++)d.push("depth"+this.environment.depths.list[e]);var g=this.mergeSource();if(!this.isChild){var h=Handlebars.COMPILER_REVISION,i=Handlebars.REVISION_CHANGES[h];g="this.compilerInfo = ["+h+",'"+i+"'];\n"+g}if(a)return d.push(g),Function.apply(this,d);var j="function "+(this.name||"")+"("+d.join(",")+") {\n  "+g+"}";return Handlebars.log(Handlebars.logger.DEBUG,j+"\n\n"),j},mergeSource:function(){for(var a,b="",c=0,d=this.source.length;d>c;c++){var e=this.source[c];e.appendToBuffer?a=a?a+"\n    + "+e.content:e.content:(a&&(b+="buffer += "+a+";\n  ",a=void 0),b+=e+"\n  ")}return b},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a),this.replaceStack(function(b){return a.splice(1,0,b),"blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b),a[a.length-1]="options",this.source.push("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){this.flushInline();var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression",this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupOnContext:function(a){this.push(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(a){return"typeof "+a+" === functionType ? "+a+".apply(depth0) : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(a){this.push(this.nameLookup("data",a,"data"))},pushStringParam:function(a,b){this.pushStackLiteral("depth"+this.lastContext),this.pushString(b),"string"==typeof a?this.pushString(a):this.pushStackLiteral(a)},emptyHash:function(){this.pushStackLiteral("{}"),this.options.stringParams&&this.register("hashTypes","{}")},pushHash:function(){this.hash={values:[],types:[]}},popHash:function(){var a=this.hash;this.hash=void 0,this.options.stringParams&&this.register("hashTypes","{"+a.types.join(",")+"}"),this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){return this.inlineStack.push(a),a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b){this.context.aliases.helperMissing="helpers.helperMissing";var c=this.lastHelper=this.setupHelper(a,b,!0);this.push(c.name),this.replaceStack(function(a){return a+" ? "+a+".call("+c.callParams+") "+": helperMissing.call("+c.helperMissingParams+")"})},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.context.aliases.functionType='"function"',this.pushStackLiteral("{}");var c=this.setupHelper(0,a,b),d=this.lastHelper=this.nameLookup("helpers",a,"helper"),e=this.nameLookup("depth"+this.lastContext,a,"context"),f=this.nextStack();this.source.push("if ("+f+" = "+d+") { "+f+" = "+f+".call("+c.callParams+"); }"),this.source.push("else { "+f+" = "+e+"; "+f+" = typeof "+f+" === functionType ? "+f+".apply(depth0) : "+f+"; }")},invokePartial:function(a){var b=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&b.push("data"),this.context.aliases.self="this",this.push("self.invokePartial("+b.join(", ")+")")},assignToHash:function(a){var b,c=this.popStack();this.options.stringParams&&(b=this.popStack(),this.popStack());var d=this.hash;b&&d.types.push("'"+a+"': "+b),d.values.push("'"+a+"': ("+c+")")},compiler:b,compileChildren:function(a,b){for(var c,d,e=a.children,f=0,g=e.length;g>f;f++){c=e[f],d=new this.compiler;var h=this.matchExistingProgram(c);null==h?(this.context.programs.push(""),h=this.context.programs.length,c.index=h,c.name="program"+h,this.context.programs[h]=d.compile(c,b,this.context),this.context.environments[h]=c):(c.index=h,c.name="program"+h)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){if(this.context.aliases.self="this",null==a)return"self.noop";for(var b,c=this.environment.children[a],d=c.depths.list,e=[c.index,c.name,"data"],f=0,g=d.length;g>f;f++)b=d[f],1===b?e.push("depth0"):e.push("depth"+(b-1));
return 0===d.length?"self.program("+e.join(", ")+")":(e.shift(),"self.programWithDepth("+e.join(", ")+")")},register:function(a,b){this.useRegister(a),this.source.push(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new c(a))},pushStack:function(a){this.flushInline();var b=this.incrStack();return a&&this.source.push(b+" = "+a+";"),this.compileStack.push(b),b},replaceStack:function(a){var b,d="",e=this.isInline();if(e){var f=this.popStack(!0);if(f instanceof c)b=f.value;else{var g=this.stackSlot?this.topStackName():this.incrStack();d="("+this.push(g)+" = "+f+"),",b=this.topStack()}}else b=this.topStack();var h=a.call(this,b);return e?((this.inlineStack.length||this.compileStack.length)&&this.popStack(),this.push("("+d+h+")")):(/^stack/.test(b)||(b=this.nextStack()),this.source.push(b+" = ("+d+h+");")),b},nextStack:function(){return this.pushStack()},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,d=a.length;d>b;b++){var e=a[b];e instanceof c?this.compileStack.push(e):this.pushStack(e)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),d=(b?this.inlineStack:this.compileStack).pop();return!a&&d instanceof c?d.value:(b||this.stackSlot--,d)},topStack:function(a){var b=this.isInline()?this.inlineStack:this.compileStack,d=b[b.length-1];return!a&&d instanceof c?d.value:d},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'},setupHelper:function(a,b,c){var d=[];this.setupParams(a,d,c);var e=this.nameLookup("helpers",b,"helper");return{params:d,name:e,callParams:["depth0"].concat(d).join(", "),helperMissingParams:c&&["depth0",this.quotedString(b)].concat(d).join(", ")}},setupParams:function(a,b,c){var d,e,f,g=[],h=[],i=[];g.push("hash:"+this.popStack()),e=this.popStack(),f=this.popStack(),(f||e)&&(f||(this.context.aliases.self="this",f="self.noop"),e||(this.context.aliases.self="this",e="self.noop"),g.push("inverse:"+e),g.push("fn:"+f));for(var j=0;a>j;j++)d=this.popStack(),b.push(d),this.options.stringParams&&(i.push(this.popStack()),h.push(this.popStack()));return this.options.stringParams&&(g.push("contexts:["+h.join(",")+"]"),g.push("types:["+i.join(",")+"]"),g.push("hashTypes:hashTypes")),this.options.data&&g.push("data:data"),g="{"+g.join(",")+"}",c?(this.register("options",g),b.push("options")):b.push(g),b.join(", ")}};for(var d="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),e=b.RESERVED_WORDS={},f=0,g=d.length;g>f;f++)e[d[f]]=!0;b.isValidJavaScriptVariableName=function(a){return!b.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?!0:!1}}(Handlebars.Compiler,Handlebars.JavaScriptCompiler),Handlebars.precompile=function(a,b){if(!a||"string"!=typeof a&&a.constructor!==Handlebars.AST.ProgramNode)throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var c=Handlebars.parse(a),d=(new Handlebars.Compiler).compile(c,b);return(new Handlebars.JavaScriptCompiler).compile(d,b)},Handlebars.compile=function(a,b){function c(){var c=Handlebars.parse(a),d=(new Handlebars.Compiler).compile(c,b),e=(new Handlebars.JavaScriptCompiler).compile(d,b,void 0,!0);return Handlebars.template(e)}if(!a||"string"!=typeof a&&a.constructor!==Handlebars.AST.ProgramNode)throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var d;return function(a,b){return d||(d=c()),d.call(this,a,b)}},Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,b,c){var d=this.programs[a];return c?Handlebars.VM.program(b,c):d?d:d=this.programs[a]=Handlebars.VM.program(b)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop,compilerInfo:null};return function(c,d){d=d||{};var e=a.call(b,Handlebars,c,d.helpers,d.partials,d.data),f=b.compilerInfo||[],g=f[0]||1,h=Handlebars.COMPILER_REVISION;if(g!==h){if(h>g){var i=Handlebars.REVISION_CHANGES[h],j=Handlebars.REVISION_CHANGES[g];throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+j+")."}throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+f[1]+")."}return e}},programWithDepth:function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(d,e){return e=e||{},a.apply(this,[d,e.data||b].concat(c))}},program:function(a,b){return function(c,d){return d=d||{},a(c,d.data||b)}},noop:function(){return""},invokePartial:function(a,b,c,d,e,f){var g={helpers:d,partials:e,data:f};if(void 0===a)throw new Handlebars.Exception("The partial "+b+" could not be found");if(a instanceof Function)return a(c,g);if(Handlebars.compile)return e[b]=Handlebars.compile(a,{data:void 0!==f}),e[b](c,g);throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in runtime-only mode")}},Handlebars.template=Handlebars.VM.template,Handlebars});
