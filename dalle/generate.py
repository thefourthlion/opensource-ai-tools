import openai
import os
from dotenv import load_dotenv
import webbrowser

load_dotenv()

# Your DALL-E API key
openai.api_key = os.getenv('openai_api_key')

# how many images you want
image_count = 5
i = 0

while (i < image_count):
    i = i + 1
    print(f"Generating image #{i}")
    # The text prompt you want to use to generate an image
    prompt = "A cat in a hat near a volcano"

    # Generate an image
    response = openai.Image.create(
        prompt=prompt,
        model="image-alpha-001",
        size="1024x1024",
        response_format="url"
    )

    # Print the URL of the generated image
    webbrowser.open(response["data"][0]["url"])
    print(response["data"][0]["url"])
