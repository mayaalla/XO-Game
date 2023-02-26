let oo = document.getElementById('oneone');
let ow = document.getElementById('onetow');
let ot = document.getElementById('onetree');
let wo = document.getElementById('towone');
let ww = document.getElementById('towtow');
let wt = document.getElementById('towtree');
let to = document.getElementById('treeone');
let tw = document.getElementById('treetow');
let tt = document.getElementById('treetree');
let o = document.getElementsByClassName('one');
let w = document.getElementsByClassName('tow');
let t = document.getElementsByClassName('tree');
let p = document.getElementById('p');
let c = document.querySelectorAll(".check");
let r = document.getElementById('reset');
let rslt = document.getElementById('rslt');

let x = "i";

function checkk(y) {
y.onclick = function() {
if (p.value == "PLAYER 1 TURN" && y.value == ""){
p.value = "PLAYER 2 TURN";
}else{
    if(p.value == "PLAYER 2 TURN" && y.value == ""){
        p.value = "PLAYER 1 TURN";
    } 
} 
if (y.value == "X" || y.value == "O"){
if (p.value == "PLAYER 1 TURN" ){
    p.value = "PLAYER 1 TURN";
    rslt.value = "THIS BOX IS ALREADY FILLED";
    rslt.style.color = "red";
    rslt.style.fontSize = "24px";
    rslt.style.fontWeight = "bold";
}else{
    if(p.value == "PLAYER 2 TURN" ){
        p.value = "PLAYER 2 TURN";
        rslt.value = "THIS BOX IS ALREADY FILLED";
        rslt.style.color = "red";
        rslt.style.fontSize = "24px";
        rslt.style.fontWeight = "bold";
    }
}
}
}
}

r.onclick = function() {
    window.location.reload();
}

oo.onclick = function() {
    storage(oo);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        oo.value = "O";
        if(o [2].value == "O" && o [1].value == "O" || t [0].value == "O" && w [0].value == "O" || t [2].value == "O" && w [1].value == "O"){
            oo.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(oo);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        oo.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [2].value == "X" && o [1].value == "X" || t [0].value == "X" && w [0].value == "X" || t [2].value == "X" && w [1].value == "X"){
            oo.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(oo);
    }
}
}
}
ot.onclick = function() {
    storage(ot);
        if(p.value == "PLAYER 1 TURN"){
            p.value = "PLAYER 2 TURN";
            ot.value = "O";
            if(o [1].value == "O" && o [0].value == "O" || t [2].value == "O" && w [2].value == "O" || t [0].value == "O" && w [1].value == "O"){
                ot.value = "O";
                rslt.value = "PLAYER 1 WIN";
                rslt.style.fontSize = "32px";
                rslt.style.fontWeight = "bold";
                c.forEach(element => {
                    element.disabled = true;
                    if(element.value == "O"){
                        element.style.color = "red";
                    }
                });
            }else{
                checkk(ot);
        }
    }else{
        if(p.value == "PLAYER 2 TURN"){
            ot.value = "X";
            p.value = "PLAYER 1 TURN";
            if(o [1].value == "X" && o [0].value == "X" || t [2].value == "X" && w [2].value == "X" || t [0].value == "X" && w [1].value == "X"){
                ot.value = "X";
                rslt.value = "PLAYER 2 WIN";
                rslt.style.fontSize = "32px";
                rslt.style.fontWeight = "bold";
                c.forEach(element => {
                    element.disabled = true;
                    if(element.value == "X"){
                        element.style.color = "red";
                    }
                });
            }else{
                checkk(ot);
        }
    }
    }
}
ow.onclick = function() {
    storage(ow);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        ow.value = "O";
        if(o [2].value == "O" && o [0].value == "O" || t [1].value == "O" && w [1].value == "O"){
            ow.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(ow);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        ow.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [2].value == "X" && o [0].value == "X" || t [1].value == "X" && w [1].value == "X"){
            ow.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(ow);
    }
}
}
}
wo.onclick = function() {
    storage(wo);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        wo.value = "O";
        if(o [0].value == "O" && t [0].value == "O" || w [1].value == "O" && w [2].value == "O"){
            wo.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(wo);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        wo.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [0].value == "X" && t [0].value == "X" || w [1].value == "X" && w [2].value == "X"){
            wo.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(wo);
    }
}
}
}
ww.onclick = function() {
    storage(ww);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        ww.value = "O";
        if(o [1].value == "O" && t [1].value == "O" || w [0].value == "O" && w [2].value == "O" || o [2].value == "O" && t [0].value == "O" || o [0].value == "O" && t [2].value == "O"){
            ww.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(ww);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        ww.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [1].value == "X" && t [1].value == "X" || w [2].value == "X" && w [0].value == "X" || o [2].value == "X" && t [0].value == "X" || o [0].value == "X" && t [2].value == "X"){
            ww.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(ww);
    }
}
}
}

wt.onclick = function() {
    storage(wt);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        wt.value = "O";
        if(o [2].value == "O" && t [2].value == "O" || w [1].value == "O" && w [0].value == "O" ){
            wt.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(wt);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        wt.value = "X";
        p.value = "PLAYER 1 TURN";
        if(w [0].value == "X" && w [1].value == "X" || t [2].value == "X" && o [2].value == "X"){
            wt.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(wt);
    }
}
}
}
to.onclick = function() {
    storage(to);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        to.value = "O";
        if(o [0].value == "O" && w [0].value == "O" || t [1].value == "O" && t [2].value == "O" || w [1].value == "O" && o [2].value == "O"  ){
            to.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(to);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        to.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [0].value == "X" && w [0].value == "X" || t [1].value == "X" && t [2].value == "X" || w [1].value == "X" && o [2].value == "X"){
            to.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(to);
    }
}
}
}

tw.onclick = function() {
    storage(tw);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        tw.value = "O";
        if(o [1].value == "O" && w [1].value == "O" || t [0].value == "O" && t [2].value == "O" ){
            tw.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(tw);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        tw.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [1].value == "X" && w [1].value == "X" || t [0].value == "X" && t [2].value == "X" ){
            tw.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(tw);
    }
}
}
}
tt.onclick = function() {
    storage(tt);
    if(p.value == "PLAYER 1 TURN"){
        p.value = "PLAYER 2 TURN";
        tt.value = "O";
        if(o [2].value == "O" && w [2].value == "O" || t [0].value == "O" && t [1].value == "O" || o [0].value == "O" && w [1].value == "O"  ){
            tt.value = "O";
            rslt.value = "PLAYER 1 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "O"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(tt);
    }
}else{
    if(p.value == "PLAYER 2 TURN"){
        tt.value = "X";
        p.value = "PLAYER 1 TURN";
        if(o [2].value == "X" && w [2].value == "X" || t [0].value == "X" && t [1].value == "X" || o [0].value == "X" && w [1].value == "X"){
            tt.value = "X";
            rslt.value = "PLAYER 2 WIN";
            rslt.style.fontSize = "32px";
            rslt.style.fontWeight = "bold";
            c.forEach(element => {
                element.disabled = true;
                if(element.value == "X"){
                    element.style.color = "red";
                }
            });
        }else{
            checkk(tt);
    }
}
}
}
function storage(q){
    localStorage.x = q.value;
    x = x + "i";
}