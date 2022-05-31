import { Pipe, PipeTransform } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { RecipeModel } from '../backend/recipe-model';

@Pipe({
    name:'SearchFilter'
})
export class SearchFilter implements PipeTransform{
    transform(recipes: RecipeModel[], search: string ) {
        if(!recipes || !search){
            return null;
        }
        var flag = false;
        
        return recipes.filter(recipe => {
            for(var part of search.split(",")){
                if(!this.searchcontains(part,recipe.keywords)){
                    return false;
                }
            }
            return true; 
           
        });
         
    }
    searchcontains(part:string, keywords:string[]){
        if(part == null || part  == undefined) return
        part = part.trim().toLowerCase();
        var not = false;
        if(part.startsWith('!')){
            console.log(part)
            not = true;
            part= part.substring(1,part.length)
            console.log(part)
        } 
        
        for(var word of keywords){
            if(word == null || word == undefined) continue;
            if(word.trim().toLowerCase().includes(part)){
                if(not) {
                    return false;
                }
                return true
            } else {
                if(not) return true;
            } 
        }
    
    
        return false;
    }
   
}
