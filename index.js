const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
  kittens.push(name);
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten(name)
{
  var arr = [kittens...,name];
  retrun arr;
}
function appendKitten(name)
{
  var arr = [kittens...,name];
  retrun arr;
}
function prependKitten(name)
{
  var arr = [name,...kittens];
  retrun arr;
} 
function removeLastKitten()
{
  var arr = kittens.slice(0,kittens.length-1);
  retrun arr;
} 
function removeFirstKitten()
{
  var arr = kittens.slice(1,kittens.length-1);
  retrun arr;
} 

 