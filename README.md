# angularui-cron-directives
Cron directives for AngularUI: cron input field, cron display field, show next cron dates.

**Attention:** only sets the day, month and weekday of the cron! Seconds, minutes and hours are not supported.


Requires:
*  AngularJS
*  Angular Translate
*  LaterJs
*  MomentJs
*  Angular Bootstrap
*  Checklist-Model


## ng-cron-input directive
```HTML
<ng-cron-input ng-model="currentCron" >
```
UI element which allows to set the repetition (daily/weekly/montly) etc.

## ng-cron-display directive
```HTML
<ng-cron-display ng-model="currentCron" >
```
Shows when the cron expression is triggered

## ng-next-cron-dates directive
```HTML
<ng-next-cron-dates ng-model="currentCron" preview-count="5" date-format="ddd, L" />
```
Shows the next x dates, when the cron expression is triggered

## Demo
Check out the demo: https://rawgit.com/lechneal/angularui-cron-directives/master/demo/demo.html

## License
The MIT License (MIT)

Copyright (c) 2016 Alexander Lechner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
