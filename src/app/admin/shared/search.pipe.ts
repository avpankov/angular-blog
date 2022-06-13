import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "src/app/shared/interfaces";

@Pipe({
    name: 'searchPipe',
    pure: false
}) 
export class SearchPipe implements PipeTransform {
    transform(posts: Post[], search: string): Post[] {
       if (!search.trim()) {
        return posts;
       } else {
           return posts.filter(post => post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
       }
    }
    
}