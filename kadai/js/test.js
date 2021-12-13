// ↓「実行のタイミング」
onload=function () {
    kihon();
    pie();
};

// 「実行するfunction（関数）を定義する」
function kihon() {
    // {から}の間に kihon() の処理内容を書く

    // 描画するcanvas要素を idで指定（変数(cnvs)に代入する）
    var cnvs=document.getElementById("canvas1");

    // 2Dコンテキストをゲット
    var ctx=cnvs.getContext("2d");

    // 四角形＿線 (strokeStyleで線の色、strokeRect(x,y, width,height)で四角形)
    ctx.strokeStyle="rgb(0,191,255)";
    ctx.strokeRect(35,50,100,100);
    // 四角形＿塗りつぶし (fillStyleで塗りの色、fillRectで四角形)
    ctx.fillStyle="rgb(129,200,49)";
    ctx.fillRect(150,50,100,100);
}

// 「実行するfunction」
function pie() {
    // {から}の間に kihon() の処理内容を書く
    var cnvs=document.getElementById("canvas2");
    var ctx=cnvs.getContext("2d");

    // 円＿線（src(x,y,radius,startAngle,endAngle,anticlockwise)）
    ctx.beginPath();
    ctx.arc(50,50,30,0, Math.PI*2,false);
    ctx.strokeStyle="#6DD900";
    ctx.stroke();

    // 円＿塗り＿透明度50％
    ctx.beginPath();
    ctx.arc(120,50,30,0, Math.PI*2,false);
    ctx.fillStyle="rgba(255,153,153,0.5)";
    ctx.fill();

    // 半円＿塗り
    ctx.beginPath();
    ctx.arc(200,50,30,0, Math.PI,false);
    ctx.fillStyle="#FFC926";
    ctx.fill();

    // 円弧＿塗り (正円じゃなく、途中で途切れた円弧です)
    ctx.beginPath();
    ctx.arc(305,80,60,20*Math.PI/180, 90*Math.PI/180,true);
    ctx.fillStyle="#A1DBAB";
    ctx.fill();

    // 円弧＿線 (正円じゃなく、途中で途切れた円弧です)
    ctx.beginPath();
    ctx.arc(450,80,60,20*Math.PI/180, 90*Math.PI/180,true);
    ctx.strokeStyle="#A1DBAB";
    ctx.lineWidth=10;
    ctx.stroke();
}

