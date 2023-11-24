function Message({ user, message }) {
    return (
      <li>
        <div className="flex text-white m-3">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-xl w-[35px] h-[35px] mr-3"
          />
          <span className="pt-[7px]">{`${user.name}: ${message}`}</span>
        </div>
      </li>
    );
  }
  export default Message;