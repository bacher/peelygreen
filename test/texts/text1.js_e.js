
function myFunc(el) {pg(1,arguments);
    var pp = el + el + el;
}

function myFunc2(el) {pg(2,arguments);
    var pp = el + el + el;
}
function pg(id,args){clearTimeout(pg.timeout);pg.frameQueue.push({id:id,args:args});pg.timeout=setTimeout(function(){var time=(new Date).toTimeString().split(" ")[0];var isFirstConsoleLog=true;var argsRow=[];for(var i=0;i<pg.frameQueue.length;++i){var funcCall=pg.frameQueue[i];if(i+1<pg.frameQueue.length&&pg.frameQueue[i+1].id===funcCall.id){argsRow.push(funcCall.args);continue}var moreThenOne=true;argsRow.push(funcCall.args);if(argsRow.length===1){moreThenOne=false;argsRow=argsRow[0]}var tickIndicator;if(isFirstConsoleLog){if(i===pg.frameQueue.length-1){tickIndicator="["}else{tickIndicator="⎡"}}else if(i===pg.frameQueue.length-1){tickIndicator="⎣"}else{tickIndicator="|"}console.log(isFirstConsoleLog?time:"        ",tickIndicator,"=== PG:call "+pg.spyFunctions[funcCall.id]+(moreThenOne?" x"+argsRow.length:""),argsRow);isFirstConsoleLog=false;argsRow=[]}pg.frameQueue=[]},0)}pg.timeout=null;pg.spyFunctions={1:'myFunc',2:'myFunc2'};pg.frameQueue=[];