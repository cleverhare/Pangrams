// Just copy and paste the below code HAPPY CODING 
function pangrams(s) {
    // Write your code here
        return [...'abcdefghijklmnopqrstuvwxyz'].every((letter) => s.toLowerCase().includes(letter)) ? 'pangram' : 'not pangram';
       let sent = s.toLowercase()

}
