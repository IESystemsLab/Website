/*
%% LICENSE:  3-clause "Revised" or "New" or "Modified" BSD License
% Copyright (c) 2015, Georgia Institute of Technology.
% All rights reserved.
% 
% Redistribution and use in source and binary forms, with or without
% modification, are permitted provided that the following conditions are met:
%     * Redistributions of source code must retain the above copyright
%       notice, this list of conditions and the following disclaimer.
%     * Redistributions in binary form must reproduce the above copyright
%       notice, this list of conditions and the following disclaimer in the
%       documentation and/or other materials provided with the distribution.
%     * Neither the name of the Georgia Institute of Technology nor the
%       names of its contributors may be used to endorse or promote products
%       derived from this software without specific prior written permission.
% 
% THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
% ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
% WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
% DISCLAIMED. IN NO EVENT SHALL THE GEORGIA INSTITUTE OF TECHNOLOGY BE LIABLE FOR 
% ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
% (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
% LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
% ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
% (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
% SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function ToggleDisplay(d0Topic, d0Content, d1Topic, d1Content, d2Topic, d2Content, d3Topic, d3Content) {
    if (document.getElementById(d0Content).style.display == "none") {
        //Make d0's content visible
        document.getElementById(d0Content).style.display = "block";

        //Brighten d0's topic
        document.getElementById(d0Topic).className = "topic";

        //Hide all other content
        document.getElementById(d1Content).style.display = "none";
        document.getElementById(d2Content).style.display = "none";
        document.getElementById(d3Content).style.display = "none";

        //Fade all other topics
        document.getElementById(d1Topic).className = "topicDimmed";
        document.getElementById(d2Topic).className = "topicDimmed";
        document.getElementById(d3Topic).className = "topicDimmed";
    }
    else {
        //Hide d0's content
        document.getElementById(d0Content).style.display = "none";

        //Brighten all other topics
        document.getElementById(d1Topic).className = "topic";
        document.getElementById(d2Topic).className = "topic";
        document.getElementById(d3Topic).className = "topic";
    }
}