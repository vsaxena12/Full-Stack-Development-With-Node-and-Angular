package fullStack.dev.managementSystem.service;

public class UserNotFoundException extends RuntimeException{
	public  UserNotFoundException(String message) {
		super(message);
	}
}
