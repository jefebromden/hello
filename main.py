import os
from glob import glob

from flask import Flask,url_for
from jinja2 import Template

app = Flask(__name__)

@app.route('/')
def index():
    homepage_src = open('hello.html').read()
    homepage_tm  = Template(homepage_src)

    styles = []
    for style in ['main','menu','custom']:
        styles.append(url_for('static',filename=f'{style}.css'))

    scripts  = [url_for('static',filename='main.js')]

    os.chdir('static')
    nav   = glob('icons/nav-*')
    os.chdir('..')
    icons = {
        'logo' : url_for('static',filename='icons/logo.svg'),
        'nav'  : [url_for('static',filename=icon) for icon in nav],
        'tools': url_for('static',filename='icons/tools.svg'),
        'dots' : url_for('static',filename='icons/dots.svg')
    }

    static = {
        'styles' : styles,
        'scripts': scripts,
        'icons'  : icons
    }

    return homepage_tm.render(static=static)

if __name__ == '__main__':
    app.run(debug=True)
