let competition:Competition=new Competition("Park",10);


let jumper:Jumper=new Jumper("aaa","1111",4);
let jumper2:Jumper=new Jumper("bbb","2222",10);
let jumper3:Jumper=new Jumper("ccc","3333",20);
let jumper4:Jumper=new Jumper("ddd","4444",30);
let jumper5:Jumper=new Jumper("eee","5555",5);
let jumper6:Jumper=new Jumper("fff","6666",15);
let jumper7:Jumper=new Jumper("ggg","7777",12);
let jumper8:Jumper=new Jumper("hhh","8888",7);

competition.add(jumper);
competition.add(jumper2);
competition.add(jumper3);
competition.add(jumper4);
competition.add(jumper5);
competition.add(jumper6);
competition.add(jumper7);
competition.add(jumper8);



console.log(competition.showAllJumpers());
console.log(competition.findWinner());

