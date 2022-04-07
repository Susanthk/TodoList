export default class Storage{


    static saveProjects(data){
        localStorage.setItem('TodoList', JSON.stringify(data))
    }

    static getProjects(){
        return JSON.parse(localStorage.getItem('TodoList'))
    }

}