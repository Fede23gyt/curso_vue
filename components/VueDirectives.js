Vue.component('vue-directives', {
    template: `<div>
                    <h1 v-text="titulo_dtv"></h1>
                    <p  v-text="text"></p>
                    <a v-bind:href="link.href" :title="link.title" v-text="link.text"></a>
                    <DirectiveHtml/>
                    <DirectiveShow/>
                    <DirectiveIf/>
                    <DirectiveFor/>
                </div>
                `,
    data () {
        return {
            titulo_dtv: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    },
    components: {
        DirectiveHtml, 
        DirectiveShow,
        DirectiveIf,
        DirectiveFor

    } 

    
})

