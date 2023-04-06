class AsyncSequenceIterator{
    constructor(iterationsCount, enqueuedPromise, promiseContext) {
        this.iteration = 0
        this.iterationsCount = iterationsCount
        this.enqueuedPromise = enqueuedPromise
        this.promiseContext = promiseContext
        this.rejectHasOccured = false
        
        this.whenComplete = new Promise((resolve,reject) => {
            this.resolve = resolve
            this.reject = reject
        })

        this.iterate()
    }

    iterate() {
    this.enqueuedPromise.call(this.promiseContext, this.iteration)
        .catch( () => {
        this.rejectHasOccured = true
        })
        .finally( () => {
        if (this.iteration < this.iterationsCount) {
            ++this.iteration
            this.iterate()
        } else if (this.rejectHasOccured) this.reject()
        else this.resolve()
        })
    }
}

class AsyncSequenceIterator{
    constructor(iterationsCount, enqueuedPromise, promiseContext) {
        this.iteration = 0
        this.iterationsCount = iterationsCount
        this.enqueuedPromise = enqueuedPromise
        this.promiseContext = promiseContext
        this.rejectHasOccured = false
    
        this.whenComplete = new Promise((resolve,reject) => {
            this.resolve = resolve
            this.reject = reject
        })

        this.iterate() 
    }

    iterate() {
        this.enqueuedPromise.call(this.promiseContext, this.iteration)
        .catch( () => {
        this.rejectHasOccured = true
        })
        .finally( () => {
        if (this.iteration < this.iterationsCount) {
            ++this.iteration
            this.iterate()
        } else if (this.rejectHasOccured) this.reject()
        else this.resolve()
        })
    }
}