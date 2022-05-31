//Declaring the variable types for topRecipesModel
export class topRecipesModel {
    img: string;
    title: string;
    desc: string;

    //Constructor assigns base values to variables
    constructor(img: string, title: string, desc: string) {
        this.img = img;
        this.title = title;
        this.desc = desc;
    }
}