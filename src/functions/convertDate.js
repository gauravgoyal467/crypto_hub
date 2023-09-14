
const convertDate = (num) => {
   var myDate =new Date(num);
    let fetchedDay=myDate.getDate();
    let fetchedMonth=myDate.getMonth();

    let day="";
    let month="";
   if(fetchedDay<10){
        day="0"+fetchedDay;
   }else{
        day=fetchedDay;
   }

   if(fetchedMonth<10){
        fetchedMonth++;
        month="0"+fetchedMonth;
    }else{
        fetchedMonth++;
        month=fetchedMonth;
    }

   return day + "/" + month;
}

export default convertDate 