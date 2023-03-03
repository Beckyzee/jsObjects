//Question 1
function InstagramPost(handle , content, imagelink, views,likes) {
    this.beckyabel_music = handle;
    this.post = content;
    this.share = imagelink;
    this.insight = views;
    this.impressions = likes;
}
//Question 2
const video = new InstagramPost("ruthetire", "dance","https://www.instagram.com/p/CoUmchBtD7s/?utm_source=ig_web_copy_link" ,"50", "20");
const image = new InstagramPost("beey", "picture", "https://www.instagram.com/p/Cm2BeP5NQJZ/?utm_source=ig_web_copy_link", "50", "43");

//3a
function createPerson(name, age, location) {
    return {
        name:name,
        age: age,
        location:location
    }
}
const person = createPerson ('musa', '19', 'lekki-Lagos');
    

//3b
function createJambScores (ENG, GOVT, LIT,CRK) {
    return {
        ENG:ENG,
        GOVT:GOVT,
        LIT:LIT,
        CRK:CRK
    }
}

//3b 
const person1 = {
    name : 'musa',
    age: '19',
    location: 'lekki-Lagos',
    jambScores: {
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94,
    }
}

//4 How to clone an object
// 1. Using Object.assign()
const Duplex = {
  location: "Golf Estate",
  Color: "Cream and Yellow",
  houseNumber: 5,
};

const Duplex2 = Object.assign({}, Duplex);
console.log(Duplex);
console.log(Duplex2);
Duplex2.houseNumber = "6";

console.log("Change the number of the Building");
console.log(Duplex);
console.log(Duplex2);

//Using Spread Syntax i.e ...

const Duplex3 = { ...Duplex };
Duplex3.houseNumber = "7";
console.log({ Duplex });
console.log({ Duplex3 });

// 5. Enumeration
// Using For...in loops
for (const AAC in presidentialCandidates) {
  console.log(AAC);
  console.log('is the presidential candidate of AAC' + presidentialCandidates[AAC]);
}    

for (const ACCORD in presidentialCandidates) {
  console.log(ACCORD);
  console.log(presidentialCandidates[ACCORD] + ' is the presidential candidate of ACCORD');
}    

for (const APC in presidentialCandidates) {
  console.log(APC);
  console.log(presidentialCandidates[APC] + 'is the presidential candidate of APC ' );
}    

for (const LP in presidentialCandidates) {
  console.log(LP);
  console.log(presidentialCandidates[LP] + 'is the presidential candidate of LP');
}    

for (const NNPP in presidentialCandidates) {
  console.log(NNPP);
  console.log(presidentialCandidates[NNPP] + 'is the presidential candidate of NNPP');
}    

for (const PDP in presidentialCandidates) {
  console.log(PDP);
  console.log(presidentialCandidates[PDP] + 'is the presidential candidate of PDP');
}    
    
    
