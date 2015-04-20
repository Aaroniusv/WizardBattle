var Wizard1 = new Image();
Wizard1.src = 'Wizard1.bmp';
var Dragon1 = new Image();
Dragon1.src = 'Dragon.bmp';
var fire = new Image();
fire.src = 'fire.bmp';
var shield = new Image();
shield.src = 'shield.bmp';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var HEIGHT = 640;
var WIDTH = 480;
var keys = [];
var keysup = [];
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
var Dragon = {
  x: this.x || 250,
  y: this.y || 450,
  fireballx: this.fireballx || null,
  firebally: this.firebally || null,
DrawDragon: function()
{
  ctx.drawImage(Dragon1, 0,0,200,200,this.x,this.y,250,200);


},




};
var Player = {
x: this.x || 0,
y: this.y || 500,
shieldy: this.shieldy || 500,
shieldSelect: this.shieldSelect || "blue",
Jumpkey: this.Jumpkey || false,
direction: this.direction || "right",
mana: this.mana || 100,
shieldKey: this.shield || false,
attack: this.attack || false,
DrawPlayer: function(direction)
{
    if (this.Jumpkey)
    {
        this.y -= 10;
    }
    if (!this.Jumpkey && this.y <= 500)
    {
        this.y += 10;
    }
    if (direction == "right")
    {
      ctx.drawImage(Wizard1, 0,0,60,80,this.x,this.y,50,80);

    }
    if (direction == "left")
    {
      ctx.drawImage(Wizard1, 0,92,60,80,this.x,this.y,50,80);
    }
},
DrawShield: function()
{
  if (this.shieldKey)
  {
    if (this.shieldSelect == "purple")
    {
      console.log(this.shieldSelect);
      ctx.drawImage(shield, 0,30,20,40,this.x+55,this.shieldy,20,50);
    }
    if (this.shieldSelect == "blue")
    {
      console.log(this.shieldSelect);
      ctx.drawImage(shield, 0,0,20,30,this.x+55,this.shieldy,20,50);
    }
    if (this.shieldSelect == "red")
    {
      console.log(this.shieldSelect);
      ctx.drawImage(shield, 22,30,20,40,this.x+55,this.shieldy,20,50);
    }

  }
}


};
var canvasHelper =
{
	drawMap: function()
	{
		ctx.fillStyle= "white";
		ctx.fillRect(0,0,WIDTH,HEIGHT);
	}
};
function update(mod)
{
  if (keys[49]) // 1
  {
      Player.shieldSelect = "blue";
  }
  if (keys[50]) // 2
  {
    Player.shieldSelect = "purple";
  }
  if (keys[51]) // 3
  {
    Player.shieldSelect = "red";
  }
	if(keys[39])
  {
		Player.x += 3;
    Player.direction = "right";
	}
	if(keys[37])
  {
		Player.x -= 3;
    Player.direction = "left";
	}
  if(keys[65])
  {
    if (Player.y >= 500)
    {
      Player.Jumpkey = true;
    }
	}
  if(keys[38]) // up
  {
		Player.shieldy -= 1;
	}
  if(keys[40]) // up
  {
    Player.shieldy += 1;

	}
  if(!keys[65])
  {
    Player.Jumpkey = false;
	}
  if(keys[83])
  {
    Player.shieldKey = true;
	}
  if(!keys[83])
  {
    Player.shieldKey = false;
	}
  if(!keys[63])
  {
    Player.attack = true;
	}

}


render = function()
{
  update(null);
  canvasHelper.drawMap();
  Player.DrawPlayer(Player.direction);
  Player.DrawShield();
  Dragon.DrawDragon();
  requestAnimationFrame(render);
}
function main()
{
  render();
}
function init()
{

  main();
}
