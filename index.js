import {franc,francAll} from 'franc';
import langs from 'langs';

const input = process.argv[2];

const code = franc(input);
const language = langs.where("3", code);

if(code == 'und') {
    console.log("Sorry, couldn't figure it out! Try with longer sample");
} else {
    console.log(`${language.name}`);
}