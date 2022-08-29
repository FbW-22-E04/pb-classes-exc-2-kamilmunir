/*. Employee Class

    Create an Employee class which accepts:
        id of the employee as a number
        firstName of the employee as a string
        lastName of the employee as as string,
        taxId as a number
        salary as a number
*/
class employee{
    constructor(id,firstname,lastname,taxid,salary,Gross){
        this.ids=id
        this.Fname=firstname
        this.lname=lastname
        this.tax=taxid
        this.sal=salary
        this.Gross=Gross
        let b=[]
        let ademp=[]
        let add=0

    }
    
    generatepayslip(day){
     
        let msalary=this.sal*day
        return  this.ids+" "+ this.Fname+ " "+ this.lname+ this.tax+" "+
         `Salary for ${day} days    `+ msalary
    }

}

let empobj=new employee(100,'Kamil','Munir',001,2500)
let h=empobj.generatepayslip(20)
console.log(h)
        
        let b=[]
        let ademp=[]
        let add=0
        class manager extends employee{
            constructor(ids,firstname,lastname,taxid,salary,day,magemp=[]){
               super(ids,firstname,lastname,taxid,salary,day)
                this.magemp=magemp                
                        }
                        getemplo(){
                            console.log(b)
                        }
                        addemployee(id,fname,lname,taxid,sal,day){
                         ademp={
                            id:id,name:fname,lname:lname,tax:taxid,salar:sal}   
                            b.push(ademp)
                        }
     generatepayslip(day,name) {
    console.log(day+"   "+this.sal)
    const searchIndex = b.findIndex((emp) => emp.name===name);
   let msalary=b[searchIndex].salar*day
   ademp={
    id:b[searchIndex].id,name:b[searchIndex].name,lname:b[searchIndex].lname,
    tax:b[searchIndex].tax,salar:b[searchIndex].salar,Grosssalary:msalary}
    if (searchIndex >=0) { 
        b.splice(searchIndex, 1);
                              }
    b.push(ademp)
        }
   removeemployee(name){
    const searchIndex = b.findIndex((emp) => emp.name===name);
   if (searchIndex >=0) { 
     b.splice(searchIndex, 1);
                     }
                                            
                        }
        }
        let a=[]

let mang1=new manager()

mang1.addemployee(1,'johny','stoke',250,350)
mang1.addemployee(2,'munir','kamil',300,250)
mang1.addemployee(3,'scott','mike',400,150)
mang1.addemployee(3,'james','moris',100,50)
mang1.getemplo()
console.log(mang1.generatepayslip(25,'johny'))
console.log(mang1.generatepayslip(20,'munir'))
console.log(mang1.generatepayslip(30,'scott'))
console.log(mang1.generatepayslip(10,'james'))
mang1.getemplo()
console.log('*******************///////////')
mang1.removeemployee('scott')
mang1.getemplo()
console.log('********************')

const emp =new employee(120,'js','ks',25,1600)
console.log(emp)
const tosal=emp.generatepayslip(20,'js')
console.log(tosal)
mang1.addemployee(6,'Bolt','BoltB',6,4500)
mang1.getemplo()
mang1.generatepayslip(19,'Bolt')
mang1.getemplo()
console.log('********************')
