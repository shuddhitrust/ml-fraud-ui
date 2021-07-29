import {
  FetchPolicy,
  Exercise,
  FetchParams,
  startingFetchParams,
} from '../../common/models';

export const emptyExerciseFormRecord: Exercise = {
  id: null,
  title: null,
  author: null,
  message: null,
  institution: null,
  groups: [],
};
export interface ExerciseStateModel {
  exercises: Exercise[];
  lastPage: number;
  exercisesSubscribed: boolean;
  fetchPolicy: FetchPolicy;
  fetchParamObjects: FetchParams[];
  exerciseFormId: number;
  exerciseFormRecord: Exercise;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultExerciseState: ExerciseStateModel = {
  exercises: [],
  lastPage: null,
  exercisesSubscribed: false,
  fetchPolicy: null,
  fetchParamObjects: [],
  exerciseFormId: null,
  exerciseFormRecord: emptyExerciseFormRecord,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};

export const ExerciseFormCloseURL =
  'dashboard?adminSection=Institutions&tab=Exercises';