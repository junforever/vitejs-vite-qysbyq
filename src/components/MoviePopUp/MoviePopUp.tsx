import React from 'react';
import CountUp from 'react-countup';
import { useAppSelector } from '../../store';
import { FaChild } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { CATEGORIES } from '../../constants';

export const MoviePopUp = React.memo(
  ({ modalRef }: { modalRef: React.RefObject<HTMLDialogElement> }) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString();
    const formatedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;
    const chatFooter = `Seen at ${hours}:${formatedMinutes}`;

    const { selectedMovie } = useAppSelector(state => state.selectedMovie);
    const { response } = useAppSelector(state => state.movies);
    const { category } = useAppSelector(state => state.filters);
    const onModalClose = () => {
      modalRef.current?.close();
    };

    return (
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4">
          <div className="navbar rounded-xl border border-gray-600 py-1 gap-x-2 justify-center ">
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Original Title</div>
                <div className="stat-value text-wrap text-center">
                  {selectedMovie?.original_title}
                </div>
                <div className="stat-desc text-sm">
                  <div>
                    <span className="font-semibold">Popularity:&nbsp;</span>
                    <CountUp end={Number(selectedMovie?.popularity)} />
                  </div>
                  <div className="flex justify-center mt-2">
                    <div
                      className="tooltip"
                      data-tip={`${selectedMovie?.adult ? 'Adult Content' : 'Child-Friendly'}`}>
                      <IconContext.Provider
                        value={{
                          className: `text-4xl ${selectedMovie?.adult ? 'text-red-600' : 'text-green-600'}`,
                        }}>
                        <FaChild />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider">Overview</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar online">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <p className="chat-bubble">{selectedMovie?.overview}</p>
              <div className="chat-footer opacity-50">{chatFooter}</div>
            </div>
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider">Additional Information</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar online">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-bubble">
                <p>
                  <b>Vote Average:</b> {selectedMovie?.vote_average}
                </p>
                <p>
                  <b>Vote Count:</b> {selectedMovie?.vote_count}
                </p>
                <p>
                  <b>Release Date:</b> {selectedMovie?.release_date}
                </p>
                <p className="capitalize">
                  <b>Original Language:</b> {selectedMovie?.original_language}
                </p>
                {(category?.value === CATEGORIES.Upcoming ||
                  category?.value === CATEGORIES.Now_Playing) && (
                  <>
                    <p>
                      <b>Minimum Date:</b> {response?.dates?.minimum}
                    </p>
                    <p>
                      <b>Maximum Date:</b> {response?.dates?.maximum}
                    </p>
                  </>
                )}
              </div>
              <div className="chat-footer opacity-50">{chatFooter}</div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn min-h-8 h-10 px-6 text-base hover:bg-sky-700 text-white font-semibold"
                onClick={onModalClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    );
  },
);

MoviePopUp.displayName = 'MoviePopUp';
