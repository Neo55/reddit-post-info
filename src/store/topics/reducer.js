import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    topicsByUrl: {},
    selectedTopicsUrls: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOPICS_FETCHED:
        return state.merge({
            topicsByUrl: action.topicsByUrl
        });
        case types.TOPICS_SELECTED:
        return state.merge({
            selectedTopicsUrls: action.selectedTopicsUrls
        });
        default:
            return state;
    }
}

export function getTopicsByUrl(state) {
    return state.topics.topicsByUrl;
}

export function getTopicsUrlArray(state) {
    return _.keys(state.topics.topicsByUrl);
}

export function getSelectedTopicsUrls(state) {
    return state.topics.selectedTopicsUrls;
}

export function getSelectedTopicsUrlsMap(state) {
    return _.keysBy(state.topics.selectedTopicsUrls);
}