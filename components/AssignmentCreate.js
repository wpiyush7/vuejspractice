export default {
     template: `
     <form @submit.prevent="submitAssignment">
        <div class="border border-gray-200 text-block">
            <input v-model="newAssignment" placeholder="New Assignment ..." type="text" class="text-block" />
            <button type="submit" class="bg-gray p-2 border-l">Submit</button>
        </div>
    </form>
     `,
    data() {
        return {
            newAssignment: ''
        };
    },
    methods: {
        submitAssignment() {
            if (this.newAssignment.trim()) {
                this.$emit('add-assignment', {
                    name: this.newAssignment,
                    complete: false,
                    id: Date.now()
                });
                this.newAssignment = '';
            }
        }
    }
}
