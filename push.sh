#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to display messages
print_message() {
    echo -e "${GREEN}==>${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}WARNING:${NC} $1"
}

print_error() {
    echo -e "${RED}ERROR:${NC} $1"
}

CURRENT_BRANCH=$(git symbolic-ref --short HEAD)

if [ -n "$(git status --porcelain)" ]; then
    print_message "Uncommitted changes detected."
    
    print_message "Adding all changes..."
    git add .
    
    echo -n "Enter commit message: "
    read COMMIT_MESSAGE
    
    if [ -z "$COMMIT_MESSAGE" ]; then
        COMMIT_MESSAGE="Update $(date +%Y-%m-%d_%H-%M-%S)"
        print_warning "No commit message provided. Using default: $COMMIT_MESSAGE"
    fi
    
    print_message "Committing changes..."
    git commit -m "$COMMIT_MESSAGE"
else
    print_message "No changes to commit."
fi

print_message "Fetching latest changes from remote..."
git fetch origin

if git ls-remote --heads origin "$CURRENT_BRANCH" | grep -q "$CURRENT_BRANCH"; then
    print_message "Branch $CURRENT_BRANCH exists on remote. Pulling latest changes..."
    git pull origin "$CURRENT_BRANCH"
else
    print_warning "Branch $CURRENT_BRANCH doesn't exist on remote. Creating new branch..."
fi

print_message "Pushing to remote branch: $CURRENT_BRANCH"
git push origin "$CURRENT_BRANCH"

if [ $? -eq 0 ]; then
    print_message "Successfully pushed to $CURRENT_BRANCH! 🎉"
else
    print_error "Failed to push to remote. Please check your permissions and try again."
    exit 1
fi