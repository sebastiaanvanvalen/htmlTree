
const state = {
    // JSON received from API. For now stored in state:
    "schoolTerm": [
        {id: 1, type: "schoolTerm", name: 2018, selected: false},
        {id: 2, type: "schoolTerm", name: 2019, selected: false}, 
        {id: 3, type: "schoolTerm", name: 2020, selected: false}
    ],
    "class": [
        {id: 1, type: "class", name: '1a', selected: false},
        {id: 2, type: "class", name: '1b', selected: false},
        {id: 3, type: "class", name: '2', selected: false},
        {id: 4, type: "class", name: '3', selected: false}, 
        {id: 5, type: "class", name: '4', selected: false}, 
        {id: 6, type: "class", name: '5a', selected: false}, 
        {id: 7, type: "class", name: '5b', selected: false}, 
        {id: 8, type: "class", name: '6', selected: false}
    ],
    "dataPoint": [
        {id: 1, type: "dataPoint", name: 'rapport 1', selected: false}, 
        {id: 2, type: "dataPoint", name: 'rapport 2', selected: false}
    ],
    "student": [
        {id: 1, type:"student", name: 'Remy', selected: false}, 
        {id: 2, type:"student", name: 'Sigrid de', selected: false}, 
        {id: 3, type:"student", name: 'Willem', selected: false}, 
        {id: 4, type:"student", name: 'Gerrit', selected: false}, 
        {id: 5, type:"student", name: 'Margriet', selected: false}, 
        {id: 6, type:"student", name: 'Vincent', selected: false}, 
        {id: 7, type:"student", name: 'Rob van', selected: false}, 
        {id: 8, type:"student", name: 'Nolda', selected: false}
    ],
    
    // actual state variables
    selYear: null,
    selGroup: null,
    selReport: null,
    selStudent: null
};

const getters = {
    getItems: (state: any) => (item: any) => {
        const thisItem = item.type.toString();
        let type = "";
        switch (thisItem) {
            case "initial":
                type = "schoolTerm"
                break;
            case "schoolTerm":
                type = "class"
                break;
            case "class":
                type = "student"
                break;
            case "student":
                type = "dataPoint"
                break;
        
            default:
                break;
        }
        return state[type]

    },

    // actual getters 
    selYear: (state: any) => state.selYear,
    selGroup: (state: any) => state.selGroup,
    selReport: (state: any) =>state.selReport,
    selStudent: (state: any) => state.selStudent,
    getReport(): object {
        // const thisYear = state.years[state.years.findIndex((obj => obj.selected === true))].year;
        return {
            "year": state.selYear,
            "class": state.selGroup,
            "report": state.selReport,
            "student": state.selStudent
        }
    }
};

const actions = {

};

const mutations = {
    setYear: (state: any, yearId: number): any => {
        state.selYear = yearId;
    },
    setGroup: (state: any, groupId: number) => {
        state.selGroup = groupId;
    },
    setReport: (state: any, reportId: number) => {
        state.selReport = reportId;
    },
    setStudent: (state: any, studentId: number) => {
        state.selStudent = studentId;
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}
