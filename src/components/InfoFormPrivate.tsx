import Button from "./Button"
import Input from "./Input"
import MultiLineInput from "./MultiLine_Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/privateserver"
import { useDispatch, useStore } from 'react-redux'
import { chooseShow, chooseAuthor, chooseRating, chooseReview } from '../redux/slices/rootSlice';

interface PrivateReviewFormProps {
  id?: string[],
}

function ReviewFormPrivate( props: PrivateReviewFormProps ) {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = ( data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if(props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.show} , ${props.id}`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseShow(data.show));
      dispatch(chooseRating(data.rating));
      dispatch(chooseReview(data.review))

      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }

  return (

    <div>
      <form onSubmit={ handleSubmit(onSubmit) }> 
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="flex flex-col px-4">
            <div>
              <label htmlFor="show">Show Name</label>
              <Input {...register('show')} name='' placeholder="Show Name"/>
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <Input {...register('rating')} name='rating' placeholder="Rating"/>
            </div>
          </div>
          <div className="flex flex-col px-4 justify-self-end">
            <div>
              <label htmlFor="review">Your Review:</label>
              <MultiLineInput {...register('review')} name='review' placeholder="Tell us what you think!"/>
            </div>
            <div className="flex p-1">
              <Button
                className="flex align-end m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
              >
                Submit
              </Button>
          </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReviewFormPrivate