export default (condition,availableTime,task) => {
    
    let result = [];
    let finishTime= new Date(condition.time.getTime());
    finishTime.setMinutes(finishTime.getMinutes()+availableTime);

    for(let i in task)task[i].used=false;
    while(1){
        let nothing = true;
        task.sort(function(a,b){
            if(a.deadline < b.deadline) return -1;
            if(a.deadline > b.deadline) return 1;
            return 0;
        });

        
        for(let i in task){
            if(task[i].used)continue;
            if(task[i].deadline < finishTime)continue;
            if(availableTime < task[i].usingTime)continue;
            if(condition.feeling=='Bad' && task[i].feeling=='Bad')continue;
            if(task[i].times.length && function(){
                for(let j of task[i].times){
                    if(j.start.substr(0,2)*100+j.start.substr(3,2)*1<=
                    condition.time.getHours()*100+condition.time.getMinutes()*1 && 
                    finishTime.getHours()*100+finishTime.getMinutes()*1 <=
                    j.end.substr(0,2)*100+j.end.substr(3,2)*1)return false;
                }
                return true;
            }())continue;
            
            if(task[i].place.length && function(){
                for(let j of task[i].place)if(condition.place==j)return false;
                return true;
            }())continue;
            
            task[i].used = true;
            result.push(task[i]);
            nothing = false;
            break;
        }
        for(let i in task){
            if(task[i].used)continue;
            if(!task[i].difficulty)continue;
            if(task[i].deadline < finishTime)continue;
            if(availableTime < task[i].usingTime)continue;
            if(condition.feeling=='Bad' && task[i].feeling=='Bad')continue;
            if(task[i].times.length && function(){
                for(let j of task[i].times){
                    if(j.start.substr(0,2)*100+j.start.substr(3,2)*1<=
                    condition.time.getHours()*100+condition.time.getMinutes()*1 && 
                    finishTime.getHours()*100+finishTime.getMinutes()*1 <=
                    j.end.substr(0,2)*100+j.end.substr(3,2)*1)return false;
                }
                return true;
            }())continue;
            if(task[i].place.length && function(){
                for(let j of task[i].place)if(condition.place==j)return false;
                return true;
            }())continue;
            task[i].used = true;
            result.push(task[i]);
            nothing = false;
            break;
        }
        task.sort(function(a,b){
            if(a.difficulty < b.difficulty) return 1;
            if(a.difficulty > b.difficulty) return -1;
            return 0;
        });
        for(let i in task){
            if(task[i].used)continue;
            if(task[i].deadline < finishTime)continue;
            if(availableTime < task[i].usingTime)continue;
            if(condition.feeling=='Bad' && task[i].feeling=='Bad')continue;
            if(task[i].times.length && function(){
                for(let j of task[i].times){
                    if(j.start.substr(0,2)*100+j.start.substr(3,2)*1<=
                    condition.time.getHours()*100+condition.time.getMinutes()*1 && 
                    finishTime.getHours()*100+finishTime.getMinutes()*1 <=
                    j.end.substr(0,2)*100+j.end.substr(3,2)*1)return false;
                }
                return true;
            }())continue;
            if(task[i].place.length && function(){
                for(let j of task[i].place)if(condition.place==j)return false;
                return true;
            }())continue;
            task[i].used = true;
            result.push(task[i]);
            nothing = false;
            break;
        }
        if(nothing)break;
    }
    console.log(result);
    return result;
}