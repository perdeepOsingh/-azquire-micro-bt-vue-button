<template>
    <div>
        <button
        :name="btnName" 
        :id="btnId" 
        :class="btnClass" 
        :value="btnValue"
        :disabled="btnDisabled || actionInProgress" 
        @click="clickAction">
            <span v-if="actionInProgress" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{btnValue}}
        </button>
    </div>
</template>

<script>
export default {
    name: 'bt-vue-button',
    props: {
        btnName: {
            type: String,
            default: 'btnVueButton-name'
        },
        btnId: {
            type: String,
            default: 'btnVueButton-Id'
        },
        btnClass: {
            type: String,
            default: null
        },
        btnValue: {
            type: String,
            default: 'Submit'
        },
        btnDisabled: {
            type: Boolean,
            default: false
        },
        btnFinalState: {
            type: String,
            default: null,
            validator: function (value) {
                // The value must match one of these strings
                return ['success', 'failure', ''].indexOf(value) !== -1
            }
        }
    },
    data() {
        return {
            actionInProgress: false
        }
    },
    watch: {
        btnFinalState(newValue) {
            const finalStateClass = newValue && newValue.toLowerCase() === 'success' ? 'btn-success' : newValue && newValue.toLowerCase() === 'failure' ? 'btn-warning' : null
            if(finalStateClass){
                this.$el.querySelector('button').classList.add(finalStateClass)
                setTimeout(() => {
                    this.actionInProgress = false
                    this.$el.querySelector('button').classList.remove(finalStateClass)
                }, 2000);
            }
        }
    },
    methods: {
        clickAction() {
            this.actionInProgress = true
            this.$emit('clicked')
            setTimeout(() => {
                    this.actionInProgress = false
                }, 2000);
        }
    },
}
</script>
