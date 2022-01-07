import {settings} from './settings'

class FeedbackService {
    async createFeedback(title, description, rating, personId) {
        let formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('rating', rating)
        formData.append('personId', personId)

        const response = await fetch(settings.baseUrl+'/feedback/createFeedback', {
            method: 'POST',
            body: formData
        })
        const data = await response.text()
        return data
    }
    
    async getAllFeedback(personId) {
        let formData = new FormData()
        formData.append('personId', personId)
        const response = await fetch(settings.baseUrl + `/feedback/getAllFeedback?personId=${personId}`)
        const data = await response.json()
        return data
    }
}

export default new FeedbackService()