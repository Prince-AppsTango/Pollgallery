const initialState = {
  ptype: "1",
  pollQuestion: "",
  questions: [],
  createpollfirst:"",
  audiencepoll:"",
  isRating:true,
  isHeadOrankedpoll:"",
  optionCombination: 0,
  targetAudience: 1,
  respondents:50,
  audienceLocat: "India",
  isPublicList: true,
  isDownloadable: false,
  reportingAudience: [],
  price:{
    base:0.90,
    audienceTarget: 0.00,
    extraReporting: [
      {
        id: "1",
        value: "Age Range (Personal)",
        label: "Age Range (Personal)",
        price: 0.0,
      },
      {
        id: "2",
        value: "Alcohol: Liquor & Spirits Drinker (Behavior)",
        label: "Alcohol: Liquor & Spirits Drinker (Behavior)",
        price: 0.0,
      }
    ],
    total: 0.0,
    Subtotal: 0.0,
    discount: {
      coupon: "GET10",
      couponName: "10% Flat Discount",
      amount: 10.0,
    },
    totalDue: 0.0,
  },
};

const setReducers = (state = initialState, action) => {
  // console.log('setReducers');
  switch (action.type) {
    case "setTitle":
      return {
        ...state,
        pollQuestion: action.payload,
      };
    case "setPType":
      return {
        ...state,
        ptype: action.payload,
      };
    case "setQuestions":
      const questions = state.questions.map((question) => {
        if (question.option == action.payload.option) {
          question = action.payload;
        }
        return question;
      });

      return {
        ...state,
        questions: questions,
      };
    case "createQuestion":
      if (state.questions.filter((e) => e.option == action.payload.option).length > 0) 
      {

      } else {
        state.questions.push(action.payload);
      }
      return {
        ...state,
        questions: state.questions,
      };
    case "removeQuestions":
      const Dquestions = state.questions.filter((e) => e.option != action.payload.option);

      return {
        ...state,
        questions: Dquestions,
      };
      case "Rating":
        return{
          ...state,
          isRating: action.payload,
        }
        case "ExtraReporting":
          const price = state.price;
price.extraReporting=action.payload;

          return{
            ...state,
            price: price,
          }
          case "Respondents":
          return{
            ...state,
            respondents: action.payload,
          }
        case "Audiance":
            return{
              ...state,
              audienceLocat: action.payload,
            }
            case "isPublic":
              return{
                ...state,
                isPublicList: action.payload,
              }
              case "isCreatePoll":
                return{
                  ...state,
                  createpollfirst: action.payload,
                }
                case "isAudiencepoll":
                  return{
                    ...state,
                    audiencepoll: action.payload,
                  }
                  case "isheadorankedpoll":
                    return{
                      ...state,
                      isHeadOrankedpoll: action.payload,
                    }
    default:
      return state;
  }
};

export default setReducers;
