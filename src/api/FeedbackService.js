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
        const response = await fetch(settings.baseUrl + `/feedback/getAllFeedback?personId=${personId}`)
        const data = await response.json()
        return data
    }

    async deleteFeedback(feedbackId) {
        const response = await fetch(settings.baseUrl + `/feedback/deleteFeedback?feedbackId=${feedbackId}`, {
            method: 'DELETE'
        })
        const data = await response.text()
        return data
    }

    async updateFeedback(feedbackId, title, description, rating) {
        let formData = new FormData()
        formData.append('feedbackId', feedbackId)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('rating', rating)
        const response = await fetch(settings.baseUrl + `/feedback/updateFeedback`,{
            method: 'PUT',
            body: formData
        })
        const data = await response.text()
        return data
    }
}

export default new FeedbackService()