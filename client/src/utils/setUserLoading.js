const { USER_LOADING } = require("../actions/types")

const setUserLoading = ()=>{
    return {
        type:USER_LOADING
    }
}
export default setUserLoading;