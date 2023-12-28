
export type IToken = {
  accessToken: string;
  refreshToken?: string;
};

export interface CurrentUserProps {
  currentUser?: {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    password: string | null;
    isAdmin: boolean;
  } | null;
}

export interface ICreateVocabDTO {
  index: number
  front_text: string
  back_text: string
  image_url?: string
  sound_url?: string
  example?: string
}

export interface ICreateLessonDTO {
  name: string
  description: string
  vocabularies: ICreateVocabDTO[]
}

export interface ILessonPreview {
  _id: string
  created_by: string
  name: string
  description?: string
  star: number
  total: number
  is_public: boolean
  created_at: string
  updated_at: string
  previewImage: string
}


export type LandingData = {
  title: string
  description: string
  href: string
  src: string
  isRightSide: boolean
  buttonTitle: string
}
export type FeedbackData = {
  title: string
  description: string
  image: string
  className?: string
}
