import axios from 'axios';
export const helpers = {

    created (){

    },
    data: function () {
        return {
            config : {
                headers: {
                    'api-token': "73d8e663e9750d3a5410c8e2a113220f5ae88c203a2a9847b23e40c4c075feae",
                    'domain' : 'malar'
                }
            }
        }
    },
    methods : {
        fetchData(_url, _config) {
            // Make a request for a user with a given ID
            return axios.get(_url,_config);

        }
    }

};