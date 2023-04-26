var thisname = 'CSBPL250MkjgbkjykjgbjhfjvhjtfW';
var length = thisname.length;
console.log(length);

const validatePlantNameLength  =(plantnamelength)=>{
    if(plantnamelength<=10){
        console.log('Plant length is less than or equal to 10',plantnamelength)
    }else{
        console.log('Plant length greater than 10, Invalid',plantnamelength)

    }
}

validatePlantNameLength(length)