export const setTitle =(data)=>{
    return {
        type:"setTitle",
        payload:data
    }
}
export const setText=(event)=>{
    return{
        type:"set",
        payload:event
    }
}

export const setPType=(event)=>{
    return{
        type:"setPType",
        payload:event
    }
}

export const setQuestions=(event)=>{
    return{
        type:"setQuestions",
        payload:event
    }
}

export const createQuestion=(event)=>{
    return{
        type:"createQuestion",
        payload:event
    }
}

export const removeQuestions=(event)=>{
    return{
        type:"removeQuestions",
        payload:event
    }
}

export const isRating=(event)=>{
    return{
        type:"Rating",
        payload:event
    }
}
export const setExtraReporting=(event)=>{
    return{
        type:"ExtraReporting",
        payload:event
    }
}
export const respondents=(event)=>{
    return{
        type:"Respondents",
        payload:event
    }
}
export const audianceLocation=(event)=>{
    return{
        type:"Audiance",
        payload:event
    }
}
export const IsPublicListStar=(event)=>{
    return{
        type:"isPublic",
        payload:event
    }
}
export const isCreatePollFirst=(event)=>{
    return{
        type:"isCreatePoll",
        payload:event
    }
}
export const Audiencepoll=(event)=>{
    return{
        type:"isAudiencepoll",
        payload:event
    }
}
export const HeadOrRankedpoll=(event)=>{
    return{
        type:"isheadorankedpoll",
        payload:event
    }
}