import axios from "axios";

const trusteeStats = {
    activeCaseCount: 0,
    opendLast30: 0,
    closedLast30: 0,
    docketNext30: 0,
};

export default {
    name: "api",
    models: {
        trustee: {
            stats: trusteeStats,
        },
    },
    url: {
        profile: "316F7A82-BC60-46A4-B584-019CD3608B87",
        base: {
            tag: "/api/tag/",
            trustee: "/api/trustee/",
            calendar: "/api/calendar/",
            case: "/api/case/",
            creditor: "/api/creditor/",
            employer: "/api/employer/"
        },
        authentication: {
            login: "/api/login/",
            user: "/api/user/",
            status: "/api/profile/",
            register: "/api/register/",

        },
    },
    list: function (url, obj, onComplete, onError, page = 0, count = 100) {
        axios
            .get(url + "?page=" + page + "&count=" + count)
            .then((response) => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                onError(obj, response.message);
            })
            .catch((error) => onError(obj, error));
    },

    getUrl: function(url, obj, onComplete, onError) {
        axios
            .get(url)
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    },

    get: function(url, obj, id, onComplete, onError) {
        axios
            .get(url + id)
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    },

    post: function(url, obj, model, onComplete, onError) {
        axios
            .post(url, model)
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                if (response.status == 400) {
                    onError(obj, response.response);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    },

    put: function(url, obj, id, model, onComplete, onError) {
        axios
            .put(url + id, model)
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                if (response.status == 400) {
                    onError(obj, response);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    },

    delete: function(url, obj, id, onComplete, onError) {
        axios
            .delete(url + id)
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    },

    model: function(url, obj, onComplete, onError) {
        axios
            .get(url + "model")
            .then(response => {
                if (response.status == 200) {
                    onComplete(obj, response.data);
                    return;
                }
                onError(obj, response.statusText);
            })
            .catch(error => onError(obj, error));
    }
};
