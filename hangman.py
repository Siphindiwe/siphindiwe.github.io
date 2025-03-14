import time
import random


word_list = ["chicken", "beef", "pasta", "spaghetti", "rigatoni", "alfredo", "mcdonalds"]


player_name = input("Hi there matey!!! I am captain Hook. Dont try to guess why my name is Hook! Save all that thinking for a game we are about to play. Say... Don't you want to play with me, Yes or No? ")

print("Ha Ha Ha!, Great choice even though you never had one. Step onto the plank and PLAY FOR YOUR LIFEEEEE")

time.sleep(1)

print("Choose your letters wisely...")
time.sleep(0.5)


secret_word = random.choice(word_list)

guessed_letters = ''
remaining_attempts = 10


while remaining_attempts > 0:
    missed_letters = 0
    
    for letter in secret_word:
        if letter in guessed_letters:
            print(letter, end="")
        else:
            print("_", end="")
            missed_letters += 1
    
    if missed_letters == 0:
        print(" You won. The sharks shall starve for one more day as the plank has spared your LIFE! for now...")
        break
    
    player_guess = input(" Pick a letter")
    guessed_letters += player_guess
    
    if player_guess not in secret_word:
        remaining_attempts -= 1
        print("Wrong")
        print("You chose " + player_guess)
        print("You have", remaining_attempts, 'more guesses')
    
        if remaining_attempts == 0:
            print("You Lost. I hope you can swim well and don't get lost on your way down. HAHAHAHA")
