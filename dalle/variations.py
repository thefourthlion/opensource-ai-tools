import openai
import os
from dotenv import load_dotenv

load_dotenv()

# Your DALL-E API key
openai.api_key = os.getenv('openai_api_key')

# The text prompt you want to use to generate an image
prompt = "Add a hat"

response = openai.Image.create_variation(
    image=open("./cat.png", "rb"),
    n=1,
    size="1024x1024"
)
image_url = response['data'][0]['url']
