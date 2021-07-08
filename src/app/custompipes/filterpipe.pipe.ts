import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any,sort_args:any)
  {
    if(sort_args=='1')
    {
     return value.sort((a:any,b:any) => (a.empName.toLowerCase()<b.empName.toLowerCase())?-1:1);

    }
   else if(sort_args=='2')
    {
     return value.sort((a:any,b:any) => (a.empId<b.empId)?-1:1);

    }
   else if(sort_args=='3')
    {
     return value.sort((a:any,b:any) => (a.empSal<b.empSal)?-1:1);

    }
  }

}

