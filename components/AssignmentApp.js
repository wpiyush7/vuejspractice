import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },
    template: `
    <section class="space-y-6">
        <assignment-list 
            :title="'In Progress'" 
            :assignments="filters.progress">
        </assignment-list>

        <assignment-list 
            :title="'Completed'" 
            :assignments="filters.completed">
        </assignment-list>

        <form>
        <div class="border border-gray-200 text-block">
            <input placeholder="New Assignment ..." type="text" class="text-block" />
            <button type="submit" class="bg-gray p-2 border-l">Submit</button>
            <div>
        </form>
        </section>
    `,
    data() {
        return {
            assignments: [
                { name: "Finish Project", complete: false },
                { name: "Finish Chapter 4", complete: false },
                { name: "Turn in homework", complete: false }
            ]
        };
    },
    computed: {
        // inProgressAssignments() {
        //     return this.assignments.filter(assignment => !assignment.complete);
        // },
        // completedAssignments() {
        //     return this.assignments.filter(assignment => assignment.complete);
        // }
        filters() {
            return {
                progress : this.assignments.filter(assignment => !assignment.complete),
                completed : this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}
