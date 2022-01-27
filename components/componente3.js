Vue.component('compo3', {
    template: ` 
        <header>
            <h1>{{ titulo }}</h1>
        </header>`,
    data () {
        return {
            titulo: 'Hola gente estoy con Vue, soy un componente'
        }
    }
})