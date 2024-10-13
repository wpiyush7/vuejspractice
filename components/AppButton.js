export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed' : true,
                'bg-blue-200 hover:bg-blue-400' : type === 'primary',
                'bg-gray-200 hover:bg-gray-400' : type === 'secondary',
                'bg-purple-200 hover:bg-purple-400' : type === 'muted',

            }" 
            :disabled="processing">
            <slot/>
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
    },
    data() {
        return {
            processing: false
        }
    }
}


// ['bg-gray-300',
//     'hover:bg-gray-400',
//     'border',
//     'rounded',
//     'px-5',
//     'py-2']